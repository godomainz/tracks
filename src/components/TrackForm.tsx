import React, { useContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext) as LocationContextType;
    
    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter name" />
            </Spacer>
            { recording ? 
            (<Button title="Stop Recording" onPress={stopRecording}/>) : 
            (<Button title="Start Recording" onPress={startRecording}/>) }
            
        </>
    );

}

const styles = StyleSheet.create({});

export default TrackForm;