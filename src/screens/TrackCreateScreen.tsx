import React, { useContext, useCallback } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback  } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
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

    const { state: {recording} , addLocation } = useContext(LocationContext) as LocationContextType;
    const callback = useCallback((location)=> {
        addLocation(location, recording)
    },[recording]);
    const [ err ] = useLocation(isFocused || recording, callback);
    return (
            <KeyboardAvoidingView behavior="position">
                    <Text size={theme.SIZES.FONT * 2}>Create a Track</Text>
                    <Map/>
                    {err ? <Text style={{color:"red"}}>Please enable location services</Text>: null }
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <TrackForm />
                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView> 

    );

}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);