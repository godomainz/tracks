import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext, AuthContextType } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import AuthParent from '../components/AuthParent';

interface Props {
    navigation: any;
}


const SignupScreen = ({ navigation }:Props) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext) as AuthContextType;
    const authForm = <AuthForm errorMessage={state.errorMessage} screenName="Sign Up" onSubmit={signup} navigation={navigation}/>;
    const navLink =  <NavLink text="Already have an account? Sign In" routeName="Signin"/>;

    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthParent authForm={authForm} navLink={navLink}/>
        </>
    );

}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

export default SignupScreen;