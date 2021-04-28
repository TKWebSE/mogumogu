import { REQUEST_STATE } from '../constants';
import { useReducer } from "react";


export const initializeState = {
    fetchState: REQUEST_STATE.INITIAL,
    restaurantsList: []
}

export const restaurantsActionTypes = {
    FETCHING: "FETCHING",
    FETCH_SUCCESS: "SUCCESS"
}

export const restaurantsReducer = (state,action) => {
    switch (action.type) {
        case restaurantsActionTypes.FETCHING:
        return {
            ...state,
            fetchState:REQUEST_STATE.LOADING,
        };
        case restaurantsActionTypes.FETCH_SUCCESS:
        return {
            fetchState: REQUEST_STATE.OK,
            restaurantsList:action.payload.restaurants,
        };  
        default:
            throw new Error();    
    }
}