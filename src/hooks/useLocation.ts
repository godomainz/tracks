import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack: boolean, callback:(location:any)=>void) => {
    const [err, setErr] = useState<string | null>(null)

    useEffect(() => {

        let subscriber:any;

        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (!granted) {
                  throw new Error('Location permission not granted');
                }else{
                    const subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 1
                    }, (location)=>{
                        callback(location);
                    });
                }
              } catch (e) {
                setErr(e);
              }
        }

        if(shouldTrack){
            startWatching();
            subscriber = null;
        }else{
            if(subscriber){
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}