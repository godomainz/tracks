import React, { useEffect, useState } from 'react';
import { requestPermissionsAsync } from 'expo-location';
import { StyleSheet,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, theme } from 'galio-framework';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState<string | null>(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
              throw new Error('Location permission not granted');
            }
          } catch (e) {
            setErr(e);
          }
    }

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView>
            <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
            <Map/>
            {err ? <Text style={{color:"red"}}>Please enable location services</Text>: null }
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({});

export default TrackCreateScreen;