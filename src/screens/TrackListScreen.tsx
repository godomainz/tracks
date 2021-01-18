import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface Props {
    navigation: any;    
}

const TrackListScreen = ({ navigation }: Props) => {

    return (
        <View>
            <Text>Hello from TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
        </View>
    );

}

const styles = StyleSheet.create({});

export default TrackListScreen;