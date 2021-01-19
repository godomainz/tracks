import { Auth } from './Auth';
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ADD_ERROR = "ADD_ERROR";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export interface Action {
    type: typeof SIGN_UP | typeof SIGN_IN | typeof SIGN_OUT | typeof ADD_ERROR | typeof SIGNIN_ERROR,
    payload: Auth | any
}

export type SignUpAction = { type: typeof SIGN_UP, payload: string }
export type SignInAction = { type: typeof SIGN_IN, payload: string }
export type SignOutAction = { type: typeof SIGN_OUT }
export type AddErrorAction = { type: typeof ADD_ERROR, payload: string[] }
export type SignInErrorAction = { type: typeof SIGNIN_ERROR, payload: string[] }