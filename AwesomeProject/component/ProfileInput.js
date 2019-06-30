import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

export default class ProfileInput extends Component {
  render() {
	return (
  <View style={{ backgroundColor: '#fff' }}>
	<Fumi
		label={this.props.label}
		labelStyle={{ color: '#a3a3a3' }}
		inputStyle={{ color: '#f95a25' }}
		iconClass={FontAwesomeIcon}
		iconName={this.props.iconName}
		iconColor={'#f95a25'}
		iconSize={15}
	/>
  </View>
	)
  }
}
