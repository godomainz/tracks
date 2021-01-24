import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Context as TrackContext, TrackContextType } from '../context/TrackContext';

interface Props {
    navigation: any;
}

const TrackDetailScreen = ( { navigation }: Props ) => {
    const { state } = useContext(TrackContext) as TrackContextType;
    const _id = navigation.getParam('_id');
    const track = state.find((t:any)=>t.id === _id);
    return (
        <View>
            <Text style={ { fontSize: 48 } }>{track.name}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default TrackDetailScreen;