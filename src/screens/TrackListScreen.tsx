import React, { useContext } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext, TrackContextType } from '../context/TrackContext';

interface Props {
    navigation: any;    
}

const TrackListScreen = ({ navigation }: Props) => {
    const { state , fetchTracks } = useContext(TrackContext) as TrackContextType;
    
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text>Hello from TrackListScreen</Text>
            {(state.length > 0) && <FlatList data={state} keyExtractor={item=>item.timestamp} renderItem={ ({ item }) => <TouchableOpacity>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity> }/>}
        </>
    );
}

const styles = StyleSheet.create({});

export default TrackListScreen;