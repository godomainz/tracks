import createDataContext from './createDataContext';
import { Auth, Login } from './Auth';
import * as actionTypes from './ActionTypes';
import trackerApi from '../api/tracker';

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
    return async ( {email, password}:Login ) => {
        let response;
        try {
            response = await trackerApi.post('signup/', { email, password});
            response = await trackerApi.post('signin/', { email, password});
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
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