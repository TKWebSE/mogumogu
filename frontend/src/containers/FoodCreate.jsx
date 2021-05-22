import React, {Fragment, useEffect, useReducer} from "react";
import styled from "styled-components";

import {ThemeProvider } from '@material-ui/core/styles';
import {SaveButton} from "../component/MaterialUISaveButton";
import {FOOD_HEADER_TITLE} from "../constants";
import {saveButtonTheme} from "../style_constants";
import {saveButtonTheme} from "../style_constants";
import { initializeState,
        foodCreateReducer } from "../reducer/foodCreateReducer";
import {createFoodApi} from "../apis/foodApis";
import {useHistory} from "react-router-dom";
import {foodShowHistory} from "../urls/index";
import {FoodState,FoodDispatch} from "../context/Context";


import {FoodCreateCard} from "../component/FoodCreateCard";

const FoodCreateWrappwer = styled.div`
`;

const FoodCreateHeader = styled.h1`
    margin-top:3%;
    margin-bottom:3%;
`;


export const FoodCreate = () => {
    const[state,dispatch] = useReducer(foodCreateReducer,initializeState);
    const history = useHistory();

    function SubmitHandle() {
        //user認証機能実装次第改修
        const user_id = 1
        createFoodApi(state.food,user_id)
        .then((data) => {
            console.log(data)
            history.push(foodShowHistory(1))
        })
        .catch(e => console.log(e))
    }

    return(
        <Fragment>
            <FoodCreateWrappwer>
                <FoodCreateHeader>
                    {FOOD_HEADER_TITLE.FOOD_CREATE}
                </FoodCreateHeader>
                <FoodDispatch.Provider value={dispatch}>
                    <FoodState.Provider value={state}>
                        <FoodCreateCard></FoodCreateCard>
                    </FoodState.Provider>
                </FoodDispatch.Provider>
                <ThemeProvider theme={saveButtonTheme}>
                    <SaveButton onClick={SubmitHandle} />
                </ThemeProvider>
            </FoodCreateWrappwer>
        </Fragment>
    )
}