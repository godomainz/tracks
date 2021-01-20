import React from 'react';
import { StyleSheet,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, theme } from 'galio-framework';
import Map from '../components/Map';

const TrackCreateScreen = () => {

    return (
        <SafeAreaView>
            <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
            <Map/>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({});

export default TrackCreateScreen;