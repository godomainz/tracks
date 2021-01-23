import { useContext } from 'react';
import { Context as TrackContext, TrackContextType } from '../context/TrackContext';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';

export default () => {
    const { createTracks } = useContext(TrackContext) as TrackContextType;
    const { state: { locations, name } } = useContext(LocationContext) as LocationContextType;

    const saveTrack = () => {
        createTracks(name, locations);
    }

    return [saveTrack];

};