import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Context as TrackContext, TrackContextType } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
interface Props {
    navigation: any;
}

const TrackDetailScreen = ( { navigation }: Props ) => {
    const { state } = useContext(TrackContext) as TrackContextType;
    const _id = navigation.getParam('_id');
    const track = state.find((t:any)=>t.id === _id);
    const trackLocations = track.locations.substring(1,track.locations.length-1).split('}, ');
    let  locations:any = [];
    trackLocations.map((item:any)=>{
        let itemstring = item.replace(/'/g, '"')
        let obj;
        try {
         obj = JSON.parse(itemstring);
        }catch(e){
            itemstring = itemstring.concat("}");
            obj = JSON.parse(itemstring);
        }
        locations.push(obj);
    })

    const initialCoords:any = locations[0].coords;
    return (
        <>
            <Text style={ { fontSize: 48 } }>{track.name}</Text>
            <MapView style={styles.map} initialRegion={{
                longitudeDelta:0.01, 
                latitudeDelta:0.01,
                ...initialCoords
                }}>
                <Polyline coordinates={locations.map((loc:any) => loc.coords)} />
            </MapView>
        </>
    );

}

const styles = StyleSheet.create({
    map: {
        height:300
    }
});

export default TrackDetailScreen;