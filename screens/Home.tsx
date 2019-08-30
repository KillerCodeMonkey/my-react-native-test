import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Startscreen!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
