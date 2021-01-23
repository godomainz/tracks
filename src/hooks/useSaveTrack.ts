import { useContext } from 'react';
import { Context as TrackContext, TrackContextType } from '../context/TrackContext';
import { Context as LocationContext, LocationContextType } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
    const { createTracks } = useContext(TrackContext) as TrackContextType;
    const { state: { locations, name }, reset } = useContext(LocationContext) as LocationContextType;

    const saveTrack = async () => {
        await createTracks(name, locations);
        reset();
        navigate("TrackList");
    }

    return [saveTrack];

};