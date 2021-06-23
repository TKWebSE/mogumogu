import React, { Fragment,useRef,useState,useEffect } from "react";
import styled from "styled-components";
import {initializeState,sessionActionTypes,sessionReducer} from "../reducer/sessionReducer";
import { useHistory } from "react-router";
import {signInApi} from "../apis/sessionApis";
import {SESSION_HEADER_TITLE} from "../constants";
import {signInCard} from "../component/sessionComponent/sessionCard";
import {SessionDispatch,SessionState} from "../context/Context";

const SessionHeader = styled.div`
`;

const SigninWrapper = styled.div`
`;

export const SignIn= () =>{
  const [state,dispatch] = useReducer(sessionReducer,initializeState);
  const history = useHistory();

  const submitSignIn= () =>  {
    signInApi()
    .then((data) => {
      dispatch({
          type:sessionActionTypes.SIGNIN,
          payload: {
            currentUser: data.currentUser
          },
      });
      history.push(foodsIndex);
    })
    .catch((e) => console.log(e))
  }

  return(
    <Fragment>
        <SessionHeader>
          {SESSION_HEADER_TITLE.SIGN_IN}
        </SessionHeader>
        <SigninWrapper>
        <SessionDispatch.Provide value={dispatch}>
          <SessionState.Provider value={state}>
            <signInCard></signInCard>
          </SessionState.Provider>
        </SessionDispatch.Provide>
        </SigninWrapper>
    </Fragment>
  )
}