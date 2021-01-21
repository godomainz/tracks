import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Input } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {

    return (
        <>
            <Spacer>
                <Input placeholder="Enter name" />
            </Spacer>
            <Button title="Start Recording" onPress={()=>{}}/>
        </>
    );

}

const styles = StyleSheet.create({});

export default TrackForm;