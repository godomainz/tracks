import React, { useState, useContext } from 'react';
import {  StyleSheet, Dimensions , KeyboardAvoidingView, Platform } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import Spacer from '../components/Spacer';
import { Context as AuthContext, AuthContextType } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

interface Props {
    navigation: any;
}

const { height, width } = Dimensions.get('window');

const SigninScreen = ({ navigation }:Props) => {

    const { state, signin } = useContext(AuthContext) as AuthContextType;

    return (
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Block flex middle>
            <KeyboardAvoidingView behavior="padding" enabled>
                <Block flex={1} center space="between">
                    <AuthForm errorMessage={state.errorMessage} screenName="Sign in" onSubmit={signin} navigation={navigation}/>
                    {/* <Block flex={1} top >
                        <Button color="transparent" shadowless onPress={() => navigation.navigate('Signup')} style={{ width: width * 0.9 }}>
                            <Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>
                                Don't have an account? Sign Up
                            </Text>
                        </Button>
                    </Block> */}
                    <NavLink text="Don't have an account? Sign Up" routeName="Signup"/>
                </Block>
            </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );

}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    signup: {
      marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    },
    input: {
      width: width * 0.9,
      borderRadius: 0,
      borderBottomWidth: 1,
      borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
    },
    inputActive: {
      borderBottomColor: "white",
    },
    error: {
        fontSize: 16,
        color: "red",
        width: width * 0.9
    }
  });

export default SigninScreen;