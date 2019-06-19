import React from 'react';
import PropTypes from 'prop-types';
import Timeline from 'react-native-timeline-listview'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';

import {
  Text,
  Card,
  ButtonGroup,
  Tile,
  Icon,
  ListItem,
  List,
  Avatar,
} from 'react-native-elements';

export default class WorkflowScreen extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const folderList = [
      {
        name: 'My First Work',
        url: 'http://www.google.com'
      },
      {
        name: 'Build Web Site',
        url: 'http://www.msn.com'
      },
      {
        name: 'Search on Bing',
        url: 'http://www.bing.com'
      },
    ];
    this.state = {
      dataSource: ds.cloneWithRows(folderList),
    };

    this.goLink = this.goLink.bind(this);
  }

  static navigationOptions = {
    headerTitle: "Initiate",
    headerTitleStyle :{alignSelf:'center'},
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  goLink = (rowData) => {
    this.props.navigation.navigate('WebView', {
      url: rowData.url,
      title: rowData.name
    });
  }
  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        title={rowData.name}
        onPress={() => this.goLink(rowData)}
      />
    )
  }

  render() {
    this.renderRow = this.renderRow.bind(this);
    return (
      <List>
        <ListView style={styles.List}
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});