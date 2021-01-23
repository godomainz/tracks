import React, {useContext} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';

const Map = () => {

    const { state: {currentLocation, locations} } = useContext(LocationContext) as LocationContextType;
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:200}} />;
    }
    
    return (
        <MapView initialRegion={{...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01}} style={styles.map} >
            <Circle center={currentLocation.coords} strokeColor={"rgba(158,158,255, 1.0)"} radius={30}
            fillColor={"rgba(158,158,255, 0.3)"}/>
            {locations.length > 0 && <Polyline coordinates={locations.map((loc:any) => loc.coords)}/>}
        </MapView>
    );

}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;