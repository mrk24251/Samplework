import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import MyInput from './MyInput'

type Props = {};
export default class Login extends Component<Props> {
  constructor (props) {
    super(props)
    this.getInputText = this.getInputText.bind(this)
  }
  getInputText (text, inputName) {
    this.setState({text})
  }
  render(){
    return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.header}>
          <Text h1
            style={styles.headerName}
          >CROW</Text>
		  <Text style={styles.signup_text}>
		  	Sign up to Crow messanger
		  </Text>
        </View>

        <View style={styles.section}>
          <Image 
            style={styles.Email_icon}
            source={require('../img/Email.png')}
          />
          <MyInput
            placeholder='email'
            keyboardType='email-address'
            inputName='email'
            onType={this.getInputText}
          />
          <Image
            style={styles.Password_icon}
            source={require('../img/Password.png')}
          />
          <MyInput
            inputName='password'
            placeholder='password'
            onType={this.getInputText}
          />
		  <Image
            style={styles.RPassword_icon}
            source={require('../img/Password.png')}
          />
		  <MyInput
            inputName='password'
            placeholder='retype password'
            onType={this.getInputText}
          />
        </View>

        <View style={styles.section}>
          <TouchableWithoutFeedback style={styles.Button}>
            <View
              style={styles.button}>
              <Text style={styles.text}>
                Sign up
              </Text>
            </View>
          </TouchableWithoutFeedback>
		  <Text>
			<Text style={styles.having_account}>
				Already have an account? 
			</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '10%',
  },
  Email_icon: { 
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 45
  },
  Password_icon: {
    width: 33,
    height: 33,
    position: 'absolute',
    top: 70,
    left: 36
  },
  RPassword_icon: {
    width: 33,
    height: 33,
    position: 'absolute',
    top: 133,
    left: 36
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 40
  },
  headerName: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: 'bold',
	color: '#fff',
	paddingHorizontal: '41.5%',
  },
  signup_text: {
	color: '#fff',
	marginTop: 8,
	paddingHorizontal: '24.5%',
  },
  button: {
    backgroundColor: 'rgb(63,147,75)',
    paddingVertical: 10,
    borderRadius: 7,
    paddingHorizontal: '40%',
    paddingVertical: 15,
    marginBottom: 20
  },
  having_account: {
	color: '#fff'
  },
  text: {
    color: '#fff'
  }
});