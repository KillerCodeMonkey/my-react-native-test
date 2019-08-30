import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Detail';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return <AppContainer />;
}
