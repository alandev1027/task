import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Text, Button } from 'react-native-elements';


export default class LoginScreen extends React.Component {

  // static navigationOptions = {
  //   title: 'Log In'
  // };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h2 style={styles.welcome}>
          Welcome
        </Text>
        <FormLabel>
          Username
        </FormLabel>
        <FormInput />
        <FormLabel>
          Password
        </FormLabel>
        <FormInput />        
        <Button large
          backgroundColor='#ff6347'
          onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
          title="LOG IN"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    backgroundColor: '#F5FCFF',
  },
  welcome: {   
    textAlign: 'center'
  },
});
