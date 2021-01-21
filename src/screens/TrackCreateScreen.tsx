import React, { useContext } from 'react';
import { StyleSheet,  } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, theme } from 'galio-framework';
import Map from '../components/Map';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';

interface Props {
    isFocused: boolean;
}

const TrackCreateScreen = ( { isFocused }:Props ) => {

    const { addLocation } = useContext(LocationContext) as LocationContextType;
    const [ err ] = useLocation(addLocation);
    console.log(isFocused);
    return (
        <SafeAreaView>
            <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
            <Map/>
            {err ? <Text style={{color:"red"}}>Please enable location services</Text>: null }
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);