import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (callback:(location:any)=>void) => {
    const [err, setErr] = useState<string | null>(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
              throw new Error('Location permission not granted');
            }else{
                await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 1
                }, (location)=>{
                    callback(location);
                })
            }
          } catch (e) {
            setErr(e);
          }
    }

    useEffect(() => {
        startWatching();
    }, [])

    return [err];
}