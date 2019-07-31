import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

export default class ProfileInput extends Component {
	constructor (props) {
		super(props)
		this.state = {
		  text: ''
		}
	  }
  render() {
		return (
			<View style={{ backgroundColor: '#fff' }}>
				<Fumi
					label={this.props.label}
					labelStyle={{ color: '#a3a3a3' }}
					inputStyle={{ color: '#000' }}
					iconClass={FontAwesomeIcon}
					iconName={this.props.iconName}
					iconColor={'rgb(110,230,50)'}
					iconSize={15}
					onChangeText={(text) => {
            this.props.onType(text, this.props.inputName)
          }
        }
				/>
			</View>
			)
			}
		}
