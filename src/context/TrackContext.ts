import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

export interface TrackContextType {
    fetchTracks: () => void;
    createTracks: (name:string, locations:[]) => void;
}


const trackReducer = (state:any, action:any) => {
    switch (action.type){
        default:
            return state;
    }
}

const fetchTracks = (dispatch:any) => () => {};
const createTracks = (dispatch:any) => async (name:string, locations:[]) => {
    await trackerApi.post('track/', { name, locations })
};

export const { Provider, Context } = createDataContext( trackReducer, { fetchTracks, createTracks }, [] );