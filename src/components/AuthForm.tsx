import React, { useState } from 'react';
import {  StyleSheet, Dimensions , Platform } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import Spacer from '../components/Spacer';

interface Props {
    navigation: any;
    onSubmit:({email, password}:{email:string, password:string}) => void;
    screenName: string;
    errorMessage: string[] | null;
}

const { height, width } = Dimensions.get('window');

const AuthForm = ({ onSubmit, screenName, errorMessage }:Props) => {

    const [email, setEmail] = useState('');
    const [emailActive, setEmailActive] = useState(false);
    const [password, setPassword ] = useState('');
    const [passwordActive, setPasswordActive] = useState(false);

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
        <>
            <Spacer><Text center style={{marginTop: 30}} color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 2}>{screenName} for Tracker</Text></Spacer>
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
                { errorMessage ? errorMessage.map((error:string) => <Text style={styles.error} key={Math.floor(Math.random()*9999)}>{error}</Text>) : null }
            </Block>
            <Button
                shadowless
                style={{ height: 48, width: width * 0.9}}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={()=>onSubmit({email, password})}>
                {screenName.toUpperCase()}
            </Button>
        </>
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

export default AuthForm;