import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import BottomButton from '../components/BottomButton';
import GroupCard from '../components/GroupCard';
import { createStackNavigator } from 'react-navigation';

/** Test function passed in to a button */
function testAlert(): void {
  Alert.alert("The button was pressed");
}

class ComponentPlaygroundScreen extends React.Component {
  static navigationOptions = {
    title: 'Component Playground',
  };

  render() {
    return (
      <View style={styles.container}>
        <BottomButton
          buttonFilled={false}
          buttonText="hello"
          buttonAction={testAlert}>
        </BottomButton>
        <BottomButton
          buttonFilled={true}
          buttonText="hello"
          buttonAction={testAlert}>
        </BottomButton>
        <GroupCard
          groupName='Test Group'

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

export default ComponentPlaygroundScreen
