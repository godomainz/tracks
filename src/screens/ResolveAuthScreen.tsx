import React, { useEffect, useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AuthContextType, Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext) as AuthContextType;

    useEffect(() => {
        tryLocalSignin();
    },[]);

    return null;
}

const styles = StyleSheet.create({});

export default ResolveAuthScreen;