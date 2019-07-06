import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

type Props = {};
export default class Login extends Component<Props> {
  render(){
	return (
		<Card>
			<View style={styles.user}>
			<Image
				style={styles.image}
				resizeMode="cover"
				source={require('../img/logo.png')}
			/>
			<Text style={styles.name}>Ali</Text>
			</View>
		</Card>
	)
  }
}

const styles = StyleSheet.create({
	user: {
		flexDirection: 'row',
	},
	image: {
		width: 30,
		height: 30,
	},
	name: {
		color: 'red' 
	}
})
