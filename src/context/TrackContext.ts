import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import * as actionTypes from './TrackActionTypes';

export interface TrackContextType {
    fetchTracks: () => void;
    createTracks: (name:string, locations:[]) => void;
}


const trackReducer = (state:any, action:actionTypes.Action) => {
    switch (action.type){
        case actionTypes.FETCH_TRACKS:
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = (dispatch:(action:actionTypes.FetchTracksAction)=>void) => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: actionTypes.FETCH_TRACKS, payload: response.data });
};
const createTracks = (dispatch:any) => async (name:string, locations:[]) => {
    await trackerApi.post('track/', { name, locations })
};

export const { Provider, Context } = createDataContext( trackReducer, { fetchTracks, createTracks }, [] );