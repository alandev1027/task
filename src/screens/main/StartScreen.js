import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Text, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'


export default class StartScreen extends React.Component {

  constructor() {
    super();
    this.state = {date:"2016-05-15"};
  }

  static navigationOptions = {
    headerTitle: "New Task",
    headerTitleStyle :{alignSelf:'center'},
    headerRight: (
      <Button
        raised
        borderRadius={5}
        onPress={() => alert('Start New Task!')}
        title="Done"
        backgroundColor="#ff6347"
        color="white"
      />
    )
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>
          Title
        </FormLabel>
        <FormInput />
        <FormLabel>
          Description
        </FormLabel>
        <FormInput multiline />
        <FormLabel>
          Date
        </FormLabel>
        <DatePicker
          style={styles.datePicker}
          showIcon={false}
          mode='datetime'
          format="YYYY-MM-DD HH-mm"
          dateFor        
          customStyles={{
            dateInput: {
                marginLeft: 18,
                marginRight: 18,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
            }
          // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
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
  button: {
    marginTop: 25
  },
  datePicker: {    
    width: '100%',
  }
});
