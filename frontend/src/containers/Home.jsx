import React,{Fragment,useEffect, useReducer,Link} from "react";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton"
import {MaterialUICommonButton} from "../component/MaterialUICommonButton";
import {ButtonTheme} from "../style_constants";
import {REQUEST_STATE,FOOD_HEADER_TITLE} from "../constants";
import { fetchFoodApi } from "../apis/foodApis";
import { initializeState,
         foodDetailActionTypes,
         foodDetailReducer} from "../reducer/foodDetail";
import {FoodDetailCard} from "../component/foodComponent/FoodDetailCard";
import {useHistory} from "react-router-dom";
import {foodUpdateHistory} from "../urls/index";

const DetailWrapper = styled.div`
    margin-left:20%;
    margin-right:20%;
`;

const LoadingWrapper = styled.div`
    
`;

const FoodDetailHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;

const FoodCardWrapper = styled.div`
    margin-bottom:5%;
`;

export const Home = ()=> {
    const history = useHistory();

    function onClickHandle() {
        history.push(foodUpdateHistory(state.food.id))
    }

    return (
        <Fragment>
            <HomeWrapper>
                <TitleWrapper>
                    {HOME_TITLE}
                </TitleWrapper>
            {
            REQUEST_STATE.LOADING === state.fetchState?
                <Fragment>
                    <LoadingWrapper>
                        <Skeleton variant="rect" width={450} height={300} />
                    </LoadingWrapper>
                </Fragment>
            :
                <Fragment>
                    <FoodCardWrapper>
                       <FoodDetailCard {...state.food}></FoodDetailCard>
                    </FoodCardWrapper>
                    <ThemeProvider theme={ButtonTheme}>
                        <MaterialUICommonButton onClick={onClickHandle} btnLabel={"編集する"}/>
                    </ThemeProvider>
                </Fragment>
            }
            </DetailWrapper>
        </Fragment>
    )
}