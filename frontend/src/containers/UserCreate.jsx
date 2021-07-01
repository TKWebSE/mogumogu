import React, {Fragment,useReducer,useEffect} from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { USER_HEADER_TITLE } from "../constants";
import {userCreateApi} from "../apis/userApis";
import { initializeState,userCreateReducer } from "../reducer/userCreateReducer";
import {UserDispatch,UserState} from "../context/Context";
// import {userShowHistory} from "../urls/index";
import {UserCreateCard} from "../component/userComponent/UserCreateCard";


const UserCreateWrapper = styled.div`
`;

const UserCreateHeader = styled.h1`
    margin-left:5%;
    margin-right:5%;
`;

const UserCreateCardWrapper = styled.div`
    margin-left:5%;
    margin-right:5%;
`;

export const UserCreate = () => {
    const [state,dispatch] = useReducer(userCreateReducer,initializeState)
    const history = useHistory();

    function SubmitHandle() {
        userCreateApi(state.user)
        .then((data) => {
            console.log(data)
            // history.pushState(userShowHistory(1))
        })
        .catch(e => console.log(e))
    }
    return(
        <Fragment>
            <UserCreateWrapper>
                <UserCreateHeader>
                    {USER_HEADER_TITLE.USER_CREATE}
                </UserCreateHeader>
                <UserCreateCardWrapper>
                    <UserDispatch.Provider value={dispatch}>
                        <UserState.Provider value={state}>
                            <UserCreateCard></UserCreateCard>
                        </UserState.Provider>
                    </UserDispatch.Provider>
                </UserCreateCardWrapper>
            </UserCreateWrapper>
        </Fragment>
    )
}