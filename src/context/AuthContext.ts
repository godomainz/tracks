import createDataContext from './createDataContext';
import { Auth, Login } from './Auth';
import * as actionTypes from './ActionTypes';
import trackerApi from '../api/tracker';

const initialState: Auth = {
    isSignedIn: false,
    errorMessage: []
}

export interface AuthContextType {
    state: Auth;
    signup: ({email, password}:Login) => void;
    signin: ({email, password}:Login) => void;
    signout: () => void;
}

const authReducer = (state:Auth, action:actionTypes.Action): Auth => {
    switch (action.type){
        case actionTypes.ADD_ERROR:
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const signup = (dispatch:(action: actionTypes.SignUpAction | actionTypes.AddErrorAction)=> void) => {
    return async ( {email, password}:Login ) => {
        let response;
        try {
            response = await trackerApi.post('signup/', { email, password});
            // response = await trackerApi.post('signin/', { email, password});
            // console.log(response);
        } catch (error) {
            const errors:Object = error.response.data;
            let errorList: string[] = [];
            for(const [key, value] of Object.entries(errors)){
                value.map((el:any)=>{
                    errorList.push(el);
                });
            } 
            dispatch({type: actionTypes.ADD_ERROR, payload: errorList });
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