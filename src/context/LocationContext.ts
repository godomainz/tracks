import createDataContext from './createDataContext';
import { Location } from './Location';

const initialState:Location = {
    recording: false,
    locations: [],
    currentLocation: null
}

const locationReducer = (state:any, action:any) => {
    switch(action.type){
        default:
            return state;
    }
}

const startRecording = (dispatch:any) => () => {};
const stopRecording = (dispatch:any) => () => {};
const addLocation = (dispatch:any) => () => {};

export const { Context, Provider } = createDataContext(locationReducer, { startRecording, stopRecording, addLocation }, initialState);