import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './components/Home';
import Random from './components/Random';


export default class App extends React.Component {

render() {
  return <AppContainer/>;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Random: {
    screen: Random
  }

});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

