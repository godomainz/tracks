import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from './src/screens/SignUpScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const navigator = createStackNavigator(
  {
    Signup: SignupScreen,

  },
  {
    initialRouteName: "Signup",
    defaultNavigationOptions: {
      title: "Tracks"
    }
  }
);

export default createAppContainer(navigator);
