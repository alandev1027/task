import React from 'react';
import PropTypes from 'prop-types';
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

export default class FolderScreen extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const folderList = [
      {
        name: 'Expense Dashboard',
        url: 'http://www.google.com'
      },
      {
        name: 'My Documents',
        url: 'http://www.msn.com'
      },
      {
        name: 'Assignment Dashboard',
        url: 'http://www.bing.com'
      },
    ];
    this.state = {
      dataSource: ds.cloneWithRows(folderList),
    };

    this.goLink = this.goLink.bind(this);
  }

  static navigationOptions = {
    headerTitle: "Browser",
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
    const folderImage = <Image source={require('../../../assets/folder.png')} style={{width: 30, height: 30, marginRight: 10}} />;
    return (
      <ListItem
        key={sectionID}
        title={rowData.name}
        leftIcon={folderImage}
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
