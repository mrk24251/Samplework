import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import ProfileInput from './ProfileInput'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};
export default class Login extends Component<Props> {
  constructor(props){
		super(props)
		this.state={
			FName: null,
			LName: null,
			City: null,
			Bio: null,
    }
    this.getInputText = this.getInputText.bind(this)
  }
  
  getInputText (text, inputName) {
    let name=inputName;
    this.setState({[name] : text})
    console.log('ccc',this.state.FName)
  }

  handleClickButton = () => {
    let fdata = new FormData()
    console.log('mmm',AsyncStorage.getItem('token'))
    AsyncStorage.getItem('token').then((keyValue) => {
      console.log(keyValue) //Display key value
      this.setState({'token': keyValue})
      }, (error) => {
      console.log(error) //Display error
    });
    console.log('respjjl:',this.abc)
    fdata.append('token',this.state.token)
    fdata.append('name', this.state.FName+'  '+this.state.LName)
	  fdata.append('description', this.state.Bio)
    axios.post('https://api.paywith.click/auth/profile/', fdata)
    .then(function (response) {
      console.log('response::::',response);
    })
    .catch(function (error) {
      console.log('error::::',error);
});
	}

  render(){
    return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.header}>
          <TouchableWithoutFeedback>
            <Image 
              style={styles.ProfileImage}
              source={require('../img/person.jpeg')}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.content}>
          <ProfileInput
		  	    label={'firstname'}
            iconName={'user'}
            onType={this.getInputText}
            inputName='FName'
          />
          <ProfileInput
		      	label={'lastname'}
            iconName={'user'}
            onType={this.getInputText}
            inputName='LName'
          />
          <ProfileInput
            label={'city'}
            iconName={'map-marker'}
            onType={this.getInputText}
            inputName='City'
          />
          <ProfileInput
            label={'bio'}
            iconName={'info'}
            onType={this.getInputText}
            inputName='Bio'
          />
        </View>

        <View style={styles.section}>
          <TouchableWithoutFeedback 
          style={styles.Button}
          onPress={() => this.handleClickButton()}>
            <View
              style={styles.button}>
              <Text style={styles.text}>
                Save profile
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  ProfileImage: {
    borderRadius: 140,
    width: 100,
    height: 100,
    marginHorizontal: '37.5%',
    marginTop: 30
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '10%',
  },
  content: {
    flex: 2,
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
    paddingTop: 0
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
    paddingHorizontal: '35%',
    paddingVertical: 15,
    marginBottom: 0
  },
  having_account: {
	color: '#fff'
  },
  text: {
    color: '#fff'
  }
});