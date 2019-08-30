import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface Props extends NavigationScreenProps {}

export default class DetailsScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Details',
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
