export const FETCH_TRACKS = "FETCH_TRACKS";

export interface Action {
    type: typeof FETCH_TRACKS ,
    payload: any
}

export type FetchTracksAction = { type: typeof FETCH_TRACKS, payload: any };