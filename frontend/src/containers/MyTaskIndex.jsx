import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import {fetchTaskIndexApi} from "../apis/taskApis";
import {SessionState,SessionDispatch,TaskState,TaskDispatch} from "../context/Context";
import {initializeState,tasksActionTypes,taskListReducer} from "../reducer/taskListReducer";
import {REQUEST_STATE,ORDER_HEADER_TITLE,NOTFOUND_FOOD_TEXT} from "../constants";
import {MyTaskIndexCard} from "../component/orderComponent/TaskIndexCard";
import NotFoundCat from "../images/NotFoundCat.jpeg";
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {foodCreateURL} from "../urls/index";
import {ButtonTheme} from "../style_constants";

const MyTaskWrapper = styled.div`
    margin-top:5%;
    margin-right:10%;
    margin-left:10%;
`;

const MyTaskIndexTitle = styled.h1`
`;

const NotExistTaskWrapper = styled.div`
`;

const ExistTaskWrapper = styled.div`
`;


const NoFoodsListWrapper = styled.div`
    padding-top:5%;
    padding-left:26%;
    position:relative;
    ${media.lessThan("medium")`
        padding-left:14%;
    `}
    ${media.lessThan("small")`
        padding-left:0%;
    `}
`;

const NotFoundCatWrapper = styled.div`
`;

const NotFoundCatImage = styled.img`
    ${media.lessThan("small")`
        width:120%;
    `}
`;

const NotExistTaskTextWrapper = styled.h3`
    position:absolute;
    top: 50%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const LetsUploadFoodsWrapper = styled.h3`
    position:absolute;
    top: 60%;
    left: 30%;
    ${media.lessThan("large")`
        left:32%;
    `}
    ${media.lessThan("medium")`
        left:20%;
    `}
    ${media.lessThan("small")`
        left:5%;
    `}
`;

const GotoFoodCreateWrapper = styled.div`
    position:absolute;
    top: 80%;
    left: 37%;
    ${media.lessThan("large")`
        left:40%;
    `}
    ${media.lessThan("medium")`
        left:34%;
    `}
    ${media.lessThan("small")`
        left:25%;
    `}
`;

const SkeltonsWrapper = styled.div`
`;

const SkeltonCardWrapper = styled.div`
    margin-left:1%;
    width:23%;
    margin-right:1%;
    padding-bottom:5%;
    float: left;
`;

const SkeltonImageWrapper = styled.div`
`;

const SkeltonTitleWrapper = styled.div`
    padding-top:6%;
`;

export const MyTaskIndex = () => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state,dispatch] = useReducer(taskListReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type: tasksActionTypes.FETCHING})
        fetchTaskIndexApi(SessionAuthState.user)
        .then((data) => {
            dispatch({
                type: tasksActionTypes.FETCH_SUCCESS,
                payload: {
                    tasksList: data.foods
                },
            });
        })
        .catch((e) => console.log(e))
    },[])

    function gotoFoodCreateHandle() {
        history.push(foodCreateURL);
    }
    console.log(state)
    return(
        <Fragment>
            <MyTaskWrapper>
                <MyTaskIndexTitle>
                    {ORDER_HEADER_TITLE.MYTASK_INDEX_TITLE}
                </MyTaskIndexTitle>
                {
                    state.fetchState === REQUEST_STATE.OK?
                        state.tasksList === []?
                            <NotExistTaskWrapper>
                                <NotFoundCatWrapper>
                                   <NotFoundCatImage src={NotFoundCat}/>
                                </NotFoundCatWrapper>
                                <NotExistTaskTextWrapper>
                                    {ORDER_HEADER_TITLE.NOT_EXIST_TASK_TEXT}
                                </NotExistTaskTextWrapper>
                                <LetsUploadFoodsWrapper>
                                    {ORDER_HEADER_TITLE.LETS_CREATE_FOOD_TEXT}
                                </LetsUploadFoodsWrapper>
                                    <ThemeProvider theme={ButtonTheme}>
                                        <GotoFoodCreateWrapper>
                                            <MaterialUICommonButton onClick={() => gotoFoodCreateHandle()} btnLabel={NOTFOUND_FOOD_TEXT.GOTO_FOOD_CREATE_BUTTON_LABEL}></MaterialUICommonButton>
                                        </GotoFoodCreateWrapper>
                                    </ThemeProvider>
                            </NotExistTaskWrapper>
                        :
                        <TaskDispatch.Provider value={dispatch}>
                            <TaskState.Provider value={state}>
                                <ExistTaskWrapper>
                                    <MyTaskIndexCard/>
                                </ExistTaskWrapper>
                            </TaskState.Provider>
                        </TaskDispatch.Provider>
                    :
                    <SkeltonsWrapper>
                        <SkeltonCardWrapper>
                            <SkeltonImageWrapper>
                                <Skeleton variant="rect" height={180}/>
                            </SkeltonImageWrapper>
                            <SkeltonTitleWrapper>
                                <Skeleton variant="rect" height={40}/>
                            </SkeltonTitleWrapper>
                        </SkeltonCardWrapper>
                    </SkeltonsWrapper>
                }
            </MyTaskWrapper>
        </Fragment>
    )
}