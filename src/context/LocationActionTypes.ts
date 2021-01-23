export const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const CHANGE_NAME = "CHANGE_NAME";
export const RESET = "RESET";

export interface Action {
    type: typeof ADD_CURRENT_LOCATION | typeof START_RECORDING | typeof STOP_RECORDING | typeof ADD_LOCATION | typeof CHANGE_NAME | typeof RESET,
    payload: any
}

export type AddCurrentLocationAction = { type: typeof ADD_CURRENT_LOCATION, payload: any };
export type AddLocationAction = { type: typeof ADD_LOCATION, payload: any };
export type StartRecordingAction = { type: typeof START_RECORDING };
export type StopRecordingAction = { type: typeof STOP_RECORDING };
export type ChangeNameAction = { type: typeof CHANGE_NAME, payload: string };
export type ResetAction = { type: typeof RESET };