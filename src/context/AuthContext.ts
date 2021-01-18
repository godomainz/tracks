import createDataContext from './createDataContext';
import { Auth } from './Auth';

const initialState: Auth = {
    isSignedIn: false
}

const authReducer = (state:Auth, action:any) => {
    switch (action.type){
        default:
            return state;
    }
}

export const { Provider, Context } = createDataContext(authReducer, {}, initialState);