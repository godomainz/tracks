import createDataContext from './createDataContext';
import { Auth, Login } from './Auth';
import * as actionTypes from './ActionTypes';

const initialState: Auth = {
    isSignedIn: false
}

export interface AuthContextType {
    state: Auth;
    signup: ({email, password}:Login) => void;
    signin: ({email, password}:Login) => void;
    signout: () => void;
}

const authReducer = (state:Auth, action:actionTypes.Action): Auth => {
    switch (action.type){
        default:
            return state;
    }
}

const signup = (dispatch:()=>actionTypes.SignUpAction) => {
    return ( {email, password}:Login ) => {
        // make api request to sign up with that email and password
        // if we sign up, modify our state, and say that we are authenticated
        // if signing up fails, we probably need to reflect an error message
    }
}

const signin = (dispatch:()=>actionTypes.SignUpAction) => {
    return ( {email, password}:Login ) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    }
}

const signOut = (dispatch:()=>actionTypes.SignUpAction) => {
    return () => {
        // Somehow sign out !!!
    }
}

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signOut }, initialState);