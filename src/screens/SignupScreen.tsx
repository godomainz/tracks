import React, { useState, useContext } from 'react';
import {  StyleSheet, Dimensions , KeyboardAvoidingView, Platform } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import Spacer from '../components/Spacer';
import { Context as AuthContext, AuthContextType } from '../context/AuthContext';

interface Props {
    navigation: any;
}

const { height, width } = Dimensions.get('window');

const SignupScreen = ({ navigation }:Props) => {

    const { state, signup } = useContext(AuthContext) as AuthContextType;

    const [email, setEmail] = useState('');
    const [emailActive, setEmailActive] = useState(false);
    const [password, setPassword ] = useState('');
    const [passwordActive, setPasswordActive] = useState(false);

    console.log(state);

    const handleChange = (name:string, value:string) => {
        if(name === 'email'){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }
    
    const toggleActive = (name:any) => {
        if(name === 'email'){
            setEmailActive(true);
            setPasswordActive(false);
        }else{
            setPasswordActive(true);
            setEmailActive(false);
        }
      }

    return (

        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.25, y: 1.1 }}
        locations={[0.2, 1]}
        colors={['#6C24AA', '#15002B']}
        style={[styles.signup, { flex: 1, paddingTop: theme.SIZES.BASE * 4 }]}>
        <Spacer><Text center style={{marginTop: 30}} color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 2}>Signup for Tracker</Text></Spacer>
        <Block flex middle>
            <KeyboardAvoidingView behavior="padding" enabled>
                <Block flex={1} center space="between">
                    <Block center>
                        <Input
                            bgColor='transparent'
                            placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                            borderless
                            color="white"
                            type="email-address"
                            placeholder="Email"
                            autoCapitalize="none"
                            style={[styles.input, emailActive ? styles.inputActive : null]}
                            onChangeText={(text:string) => handleChange('email',text)}
                            onBlur={() => toggleActive('email')}
                            onFocus={() => toggleActive('email')}
                            value={email}
                        />
                        <Input
                            bgColor='transparent'
                            placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                            borderless
                            color="white"
                            password
                            viewPass
                            placeholder="Password"
                            iconColor="white"
                            style={[styles.input, passwordActive ? styles.inputActive : null]}
                            onChangeText={(text:string) => handleChange('password',text)}
                            onBlur={() => toggleActive('password')}
                            onFocus={() => toggleActive('password')}
                            value={password}
                        />
                        { state.errorMessage ? state.errorMessage.map((error:string) => <Text style={styles.error} key={error}>{error}</Text>) : null }
                    </Block>
                    <Block flex={1} top style={{ marginTop: 20}}>
                        
                        <Button
                            shadowless
                            style={{ height: 48, width: width * 0.9}}
                            color={materialTheme.COLORS.BUTTON_COLOR}
                            onPress={()=>{
                                console.log("SIGNUP");
                                signup({email, password});                         
                                }
                            }
                        >
                        SIGN UP
                        </Button>
                        <Button color="transparent" shadowless onPress={() => navigation.navigate('Signin')} style={{ width: width * 0.9 }}>
                        <Text center color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.75}>
                            Already have an account? Sign In
                        </Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        </Block>
      </LinearGradient>
    );

}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;