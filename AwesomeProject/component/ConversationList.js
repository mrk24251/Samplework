import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};
export default class Login extends Component<Props> {
	constructor (props) {
    super(props)
    this.state = {
      conversationList: [],
      myId: AsyncStorage.getItem('id'),
      suggestedUsers: [],
      messages: [],
      user: [],
			conversation: [],
			token: 'gggg'
    }
  }

  	async changeHandler() {
		aaa=await AsyncStorage.getItem('token')
		console.log('aaa',aaa)
		await this.setState({ token: aaa });
		const token = this.state.token
		axios.get('https://api.paywith.click/conversation/', {
			params: {
				token: token
			}
		})
		.then(response => {
			console.log('ajjjja', response)
		})
		.catch(error => {
			console.log('error:', error)
		})
	}

	componentDidMount () {
		this.changeHandler()
	}

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
