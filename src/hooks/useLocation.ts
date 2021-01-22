import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack: boolean, callback:(location:any)=>void) => {
    const [err, setErr] = useState<string | null>(null)
    const [subscriber, setSubscriber] = useState<any>(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
              throw new Error('Location permission not granted');
            }else{
                const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 1
                }, (location)=>{
                    callback(location);
                });
                setSubscriber(sub);
            }
          } catch (e) {
            setErr(e);
          }
    }

    useEffect(() => {
        if(shouldTrack){
            startWatching();
        }else{
            subscriber.remove();
            setSubscriber(null);
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}