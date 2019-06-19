import React, { Component } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';
export default class WebViewScreen extends Component {

  constructor(props) {
    super(props);
    if (!!this.props.navigation) {
      url = this.props.navigation.getParam('url');
    }

    this.state = {
      url
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'Detail': navigation.getParam('title')

  })

  static propTypes = {
    linkUrl: PropTypes.string
  };

  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={{marginTop: 20}}
      />
    );
  }
}