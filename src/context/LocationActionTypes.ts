export const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";

export interface Action {
    type: typeof ADD_CURRENT_LOCATION,
    payload: any
}

export type AddCurrentLocationAction = { type: typeof ADD_CURRENT_LOCATION, payload: any }