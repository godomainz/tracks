import React, { useContext } from 'react';
import {  StyleSheet, Dimensions , KeyboardAvoidingView, Platform } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { AuthContextType, Context as AuthContext } from '../context/AuthContext';

const { height, width } = Dimensions.get('window');
const AccountScreen = () => {
    const { signOut } = useContext(AuthContext) as AuthContextType;
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
                <Button
                    shadowless
                    style={{ height: 48, width: width * 0.9}}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={signOut}>
                    LOGOUT
                </Button>
                </Block>
            </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );

}

AccountScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    signup: {
      marginTop: Platform.OS === 'android' ? - 10 : 0,
    }
  });

export default AccountScreen;