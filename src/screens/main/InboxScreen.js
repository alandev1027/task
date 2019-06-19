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

export default class InboxScreen extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const list2 = [
      {
        name: 'Amy Farha',
        avatar_url:
          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        linearGradientColors: ['#FF9800', '#F44336'],
        url: 'http://www.google.com'
      },
      {
        name: 'Chris Jackson',
        avatar_url:
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        url: 'http://www.yahoo.com'
      },
      {
        name: 'Amanda Martin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        subtitle: 'CEO',
        linearGradientColors: ['#FFD600', '#FF9800'],
        url: 'http://www.bing.com'
      },
    ];
    this.state = {
      dataSource: ds.cloneWithRows(list2),
    };

    this.goLink = this.goLink.bind(this);
  }

  static navigationOptions = {
    title: "Inbox", // to add letter spacing on Android
    headerTitleStyle :{alignSelf:'center'},
    headerVisible: false
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
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
        onPress={() => this.goLink(rowData)}
      />
    )
  }

  render() {
    return (
      <List>
        <ListView style={styles.List}
          renderRow={this.renderRow.bind(this)}
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
