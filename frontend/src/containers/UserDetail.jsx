import React, {Fragment,useReducer,seContext, useEffect} from 'react';
import {fetchUserApi} from "../api/user";
import {state,dispatch} from "../context/Context";
import {initializeState,usersActionTypes,userDetailReducer} from "../reducer/userDetailReducer";
import ContainedButton from "../component/MaterialUIButtons";
import {userEdit} from "../urls/index";

const UserWrapper = styled.h1`
`;

const UserDetailWrapper = styled.div`
`;

const UserName = styled.div`
`;

export const UserDetail = ({match}) => { 
  const [state,dispatch] = useReducer(reducer,initializeState);

  useEffect(() => {
    dispatch({type:usersActionTypes.FETCHING});
    fetchUserApi(match.params.userId)
      .then((date) => {
          dispatch({
            type:usersActionTypes.FETCH_SUCCESS,
            payload:{
              user:data.user
            }
          });
        })
      .catch((e) => console.log(e));
  },[]);
  
  return (
    <Fragment>
      <UserDetailWrapper>
        <UserHeaderWrapper>
          {USER_HEADER_TITLE.UserDetail}
        </UserHeaderWrapper>  
        <UserName>
          {state.user.name}
        </UserName>
        <Userpoint>
          {state.user.point}
        </Userpoint>
        <UserDescription>
          {state.user.detail}
        </UserDescription>
        <UserEditButton>
          <ContainedButtons href={userEdit} />
        </UserEditButton>
      </UserDetailWrapper>  
    </Fragment>
    )
}