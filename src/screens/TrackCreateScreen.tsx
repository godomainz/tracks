import React from 'react';
import { StyleSheet,  } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, theme } from 'galio-framework';
import Map from '../components/Map';

const TrackCreateScreen = () => {

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
            <Map/>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({});

export default TrackCreateScreen;