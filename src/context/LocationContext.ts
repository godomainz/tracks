import createDataContext from './createDataContext';
import { Location } from './Location';
import * as actionTypes from './LocationActionTypes'

const initialState:Location = {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null
}

export interface LocationContextType {
    state: Location;
    startRecording: () => void;
    stopRecording: () => void;
    addLocation: (location:any, recording:boolean) => void;
    changeName: (name:string) => void;
    reset: () => void;
}

const locationReducer = (state:Location, action:actionTypes.Action) => {
    switch(action.type){
        case actionTypes.ADD_CURRENT_LOCATION:
            return { ...state, currentLocation:  action.payload };
        case actionTypes.START_RECORDING:
            return { ...state, recording: true };
        case actionTypes.STOP_RECORDING:
            return { ...state, recording: false };
        case actionTypes.ADD_LOCATION:
            return { ...state, locations: [ ...state.locations, action.payload ] };
        case actionTypes.CHANGE_NAME:
            return { ...state, name: action.payload };
        case actionTypes.RESET:
            return { ...state, name: '', locations: '' };
        default:
            return state;
    }
}

const changeName = (dispatch:(action: actionTypes.ChangeNameAction)=>void) => (name:string) => {
    dispatch({type: actionTypes.CHANGE_NAME, payload: name});
}

const startRecording = (dispatch:(action:actionTypes.StartRecordingAction)=>void) => () => {
    dispatch({type: actionTypes.START_RECORDING});
};
const stopRecording = (dispatch:(action:actionTypes.StopRecordingAction)=>void) => () => {
    dispatch({type: actionTypes.STOP_RECORDING});
};
const addLocation = (dispatch:(action: actionTypes.AddCurrentLocationAction | actionTypes.AddLocationAction)=>void) => (location:any, recording:boolean) => {
    dispatch({ type: actionTypes.ADD_CURRENT_LOCATION, payload: location });
    if(recording){
        dispatch({type: actionTypes.ADD_LOCATION, payload: location})
    }
};
const reset = (dispatch:(action:actionTypes.ResetAction)=>void) => () => {
    dispatch({type: actionTypes.RESET});
};

export const { Context, Provider } = createDataContext(locationReducer, { startRecording, stopRecording, addLocation, changeName, reset }, initialState);