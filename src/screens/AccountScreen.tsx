import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  StyleSheet, Dimensions , KeyboardAvoidingView } from 'react-native';
import { Block, theme, Button, Text } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { AuthContextType, Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

interface Props {
    navigation: any;
}

const { height, width } = Dimensions.get('window');

const AccountScreen = ({ navigation }:Props) => {
    const { signOut } = useContext(AuthContext) as AuthContextType;
    return (
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[{ flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Block flex middle>
            <KeyboardAvoidingView behavior="padding" enabled>
                <Block flex={1} center >
                <SafeAreaView>
                    <Spacer><Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 2}>Account Screen</Text></Spacer>
                    <Button
                        shadowless
                        style={{ height: 48, width: width * 0.9}}
                        color={materialTheme.COLORS.BUTTON_COLOR}
                        onPress={signOut}>
                        LOGOUT
                    </Button>
                </SafeAreaView>
                </Block>
            </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );

}


const styles = StyleSheet.create({});

export default AccountScreen;