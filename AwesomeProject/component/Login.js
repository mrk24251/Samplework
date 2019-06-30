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
          <Image 
            style={{width: 80, height: 80}}
            source={require('../img/logo.png')}
          />
          <Text h1
            style={styles.headerName}
          >CROW</Text>
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
        </View>

        <View style={styles.section}>
          <TouchableWithoutFeedback style={styles.Button}>
            <View
              style={styles.button}>
              <Text style={styles.text}>
                Sign in
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.Button}>
            <View
              style={styles.button}>
              <Text style={styles.text}>
                Sign up
              </Text>
            </View>
          </TouchableWithoutFeedback>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '41.5%',
    paddingTop: 40
  },
  headerName: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: 'rgb(63,147,75)',
    paddingVertical: 10,
    borderRadius: 7,
    paddingHorizontal: '40%',
    paddingVertical: 15,
    marginBottom: 20
  },
  text: {
    color: '#fff'
  }
});