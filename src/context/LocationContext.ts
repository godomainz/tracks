import createDataContext from './createDataContext';
import { Location } from './Location';
import * as actionTypes from './LocationActionTypes'

const initialState:Location = {
    recording: false,
    locations: [],
    currentLocation: null
}

export interface LocationContextType {
    state: any;
    startRecording: () => void;
    stopRecording: () => void;
    addLocation: (location:any) => void;
}

const locationReducer = (state:Location, action:actionTypes.Action) => {
    switch(action.type){
        case actionTypes.ADD_CURRENT_LOCATION:
            return { ...state, currentLocation:  action.payload }
        default:
            return state;
    }
}

const startRecording = (dispatch:any) => () => {};
const stopRecording = (dispatch:any) => () => {};
const addLocation = (dispatch:(action: actionTypes.AddCurrentLocationAction)=>void) => (location:any) => {
    dispatch({ type: actionTypes.ADD_CURRENT_LOCATION, payload: location });
};

export const { Context, Provider } = createDataContext(locationReducer, { startRecording, stopRecording, addLocation }, initialState);