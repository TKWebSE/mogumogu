import React, {Reducer}from "react";
import { REQUEST_STATE } from "../constants";

export const initializeState = {
    fetchState:REQUEST_STATE.INITIAL,
    food:null,
    update_food:null,
}

export const foodEditActionTypes = {
    FETCHING:"FECTHING",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    SETTING:"SETTING",
    UPDATE_SUCCESS:"SET_SUCCESS"
}

export const foodEditReducer = (state,action) => {
    switch (action.type) {
        case foodEditActionTypes.FETCHING:
            return {
                ...state,
                fetchstate:REQUEST_STATE.LOADING,
            }
        case  foodEditActionTypes.FETCH_SUCCESS:
            return {
                fetchstate:REQUEST_STATE.OK,
                food: action.payload.food,
            }
        case foodEditActionTypes.SETTING:
            return{
                food: action.payload.price,
            }
        case foodEditActionTypes.UPDATE_SUCCESS:
            console.log(action.payload)
            return{
                food: action.payload.price,
            }
        default:
            throw Error();
    }
}