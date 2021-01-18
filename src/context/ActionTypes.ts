import { Auth } from './Auth';
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export interface Action {
    type: typeof SIGN_UP | typeof SIGN_IN | typeof SIGN_OUT,
    payload: Auth | any
}

export type SignUpAction = { type: typeof SIGN_UP, payload: Auth }
export type SignInAction = { type: typeof SIGN_IN, payload: Auth }
export type SignOutAction = { type: typeof SIGN_OUT }