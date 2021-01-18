import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface Props {
    navigation: any;
}

const SignupScreen = ({ navigation }:Props) => {

    return (
        <View>
            <Text>Hello from SignupScreenttt</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}/>
            <Button title="Go to main flow" onPress={() => navigation.navigate('mainFlow')}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default SignupScreen;