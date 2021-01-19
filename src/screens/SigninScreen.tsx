import React, { useContext } from 'react';
import { Context as AuthContext, AuthContextType } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import AuthParent from '../components/AuthParent';

interface Props {
    navigation: any;
}

const SigninScreen = ({ navigation }:Props) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext) as AuthContextType;
    const authForm = <AuthForm errorMessage={state.errorMessage} screenName="Sign in" onSubmit={signin} navigation={navigation}/>;
    const navLink =  <NavLink text="Don't have an account? Sign Up" routeName="Signup"/>;
    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthParent authForm={authForm} navLink={navLink}/>
        </>
    );
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

export default SigninScreen;