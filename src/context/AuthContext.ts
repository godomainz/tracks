import createDataContext from './createDataContext';
import { Auth, Login } from './Auth';
import * as actionTypes from './ActionTypes';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const initialState: Auth = {
    token: null,
    errorMessage: null
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
        case actionTypes.SIGN_UP:
            return {errorMessage: null, token: action.payload}
        case actionTypes.SIGNIN_ERROR:
            return {...state, errorMessage: action.payload}
        case actionTypes.SIGN_IN:
            return {errorMessage: null, token: action.payload}
        default:
            return state;
    }
}

const storeData = async (key :string,value:string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  }

const getData = async (key:string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value !== null) {
        return value;
      }
    } catch(e) {
        console.log(e);
    }
  }

const getErrors = (response: Object):string[] => {
    const errors:Object = response;
    let errorList: string[] = [];
    for(const [key, value] of Object.entries(errors)){
        value.map((el:any)=>{
            errorList.push(key+": "+el);
        });
    }
    console.log(errorList)
    return errorList;
}

const signup = (dispatch:(action: actionTypes.SignUpAction | actionTypes.AddErrorAction)=> void) => async ( {email, password}:Login ) => {
        
    console.log("SIGNUP TRIGGERED")
    try {
        const response = await trackerApi.post('signup/', { email, password});
        await storeData('token',response.data.token);
        dispatch({ type: actionTypes.SIGN_UP, payload: response.data.token });
        navigate('TrackList');
    } catch (error) {
        dispatch({type: actionTypes.ADD_ERROR, payload: getErrors(error.response.data) });
    }
    };


const signin = (dispatch:(action: actionTypes.SignInAction | actionTypes.SignInErrorAction)=> void) => async ( {email, password}:Login ) => {
    console.log("SIGNIN TRIGGERED")
    try {
        console.log("SIGNIN");
        console.log(`${email}, ${password}`);
        const response = await trackerApi.post('signin/', { email, password});
        await storeData('token',response.data.token)
        dispatch({ type: actionTypes.SIGN_IN, payload: response.data.token });
        navigate('TrackList');
    } catch (error) {
        dispatch({type: actionTypes.SIGNIN_ERROR, payload: getErrors(error.response.data) });
    }
};


const signOut = (dispatch:()=>actionTypes.SignUpAction) => {
    return () => {
        // Somehow sign out !!!
    }
}

export const { Provider, Context } = createDataContext(authReducer, { signup, signin, signOut }, initialState);