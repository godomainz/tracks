import React from 'react';
import {  StyleSheet, Dimensions , KeyboardAvoidingView, Platform } from 'react-native';
import { Block, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";


interface Props {
    authForm: any;
    navLink: any;
}

const { height, width } = Dimensions.get('window');

const AuthParent = ({ authForm, navLink }:Props) => {

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
                    {authForm}
                    {navLink}
                </Block>
            </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );

}

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

export default AuthParent;