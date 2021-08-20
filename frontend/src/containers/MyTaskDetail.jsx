import React, {Fragment, useEffect, useReducer,useContext} from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from "react-router-dom";
import {fetchTaskApi} from "../apis/taskApis";
import {SessionState,SessionDispatch,TaskState,TaskDispatch} from "../context/Context";
import {initializeState,taskActionTypes,taskReducer} from "../reducer/taskReducer";
import {REQUEST_STATE,ORDER_HEADER_TITLE} from "../constants";
import {TaskDetailCard} from "../component/orderComponent/TaskDetailCard";
import {myTaskShowBackendURL} from "../urls/index";


const TaskDetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const TaskDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const TaskDetailCardWrapper = styled.div`
margin-bottom:5%;
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


export const MyTaskDetail = ({match}) => {
    const SessionAuthState = useContext(SessionState);
    const SessionAuthDispatch = useContext(SessionDispatch)
    const [state,dispatch] = useReducer(taskReducer,initializeState);
    const history = useHistory();

    useEffect(() => {
        dispatch({type: taskActionTypes.FETCHING})
        fetchTaskApi(match.params.orderId)
        .then((data) => {
            dispatch({
                type: taskActionTypes.FETCH_SUCCESS,
                payload: {
                    task: data.task[0]
                },
            });
        })
        .catch((e) => console.log(e))
    },[])

    function submitTaskFinishedHandle(){

    }

    function submitTaskCancelHandle(){

    }
    console.log(state)
    return (
        <Fragment>
            <TaskDetailWrapper>
                <TaskDetailHeader>
                    {ORDER_HEADER_TITLE.TASK_DETAIL}
                </TaskDetailHeader>
                {
                state.fetchState === REQUEST_STATE.OK?
                <TaskDispatch.Provider value={dispatch}>
                    <TaskState.Provider value={state}>
                        <TaskDetailCardWrapper>
                            <TaskDetailCard/>
                        </TaskDetailCardWrapper>
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
            </TaskDetailWrapper>
       </Fragment>
    )
}