import createDataContext from './createDataContext';

const trackReducer = (state:any, action:any) => {
    switch (action.type){
        default:
            return state;
    }
}

const fetchTracks = (dispatch:any) => () => {};
const createTracks = (dispatch:any) => () => {};

export const { Provider, Context } = createDataContext( trackReducer, { fetchTracks, createTracks }, [] );