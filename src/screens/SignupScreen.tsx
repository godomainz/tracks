import React, {useState} from 'react';
import {  StyleSheet, Dimensions , KeyboardAvoidingView, Platform } from 'react-native';
import { Block, Button, Input, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { materialTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import Spacer from '../components/Spacer';

interface Props {
    navigation: any;
}

const { height, width } = Dimensions.get('window');

const SignupScreen = ({ navigation }:Props) => {

    const initialState = {
        user: '-',
        email: '-',
        password: '-',
        active: {
          user: false,
          email: false,
          password: false,
        }
      }
    const [state, setState] = useState(initialState);
    
    const handleChange = (name:any, value:any) => {
        // setState({ [name]: value });
      }
    
    const toggleActive = (name:any) => {
        // const { active } = state;
        // active[name] = !active[name];
    
        // setState({ active });
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
                  style={[styles.input, state.active.email ? styles.inputActive : null]}
                  onChangeText={(text:any) => handleChange('email', text)}
                  onBlur={() => toggleActive('email')}
                  onFocus={() => toggleActive('email')}
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
                  style={[styles.input, state.active.password ? styles.inputActive : null]}
                  onChangeText={(text:any) => handleChange('password', text)}
                  onBlur={() => toggleActive('password')}
                  onFocus={() => toggleActive('password')}
                />
              </Block>
              <Block flex={1} top style={{ marginTop: 20}}>
                <Button
                  shadowless
                  style={{ height: 48, width: width * 0.9}}
                  color={materialTheme.COLORS.BUTTON_COLOR}
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

const styles = StyleSheet.create({
    signup: {
      marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 1
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
  });

export default SignupScreen;