import React, { useContext, useCallback } from 'react';
import { StyleSheet,  } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, theme } from 'galio-framework';
import Map from '../components/Map';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';
import TrackForm from '../components/TrackForm';

interface Props {
    isFocused: boolean;
}

const TrackCreateScreen = ( { isFocused }:Props ) => {

    const { state , addLocation } = useContext(LocationContext) as LocationContextType;
    const callback = useCallback((location)=> {
        addLocation(location, state.recording)
    },[state.recording]);
    const [ err ] = useLocation(isFocused, callback);
    return (
        <SafeAreaView>
            <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
            <Map/>
            {err ? <Text style={{color:"red"}}>Please enable location services</Text>: null }
            <TrackForm />
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);