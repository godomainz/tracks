import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment:number) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 79.89327238792575 + increment * tenMetersWithDegrees,
      latitude: 6.747290129769106 + increment * tenMetersWithDegrees
    }
  };
};

let counter:number = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);