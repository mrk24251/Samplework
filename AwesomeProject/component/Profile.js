import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import ProfileInput from './ProfileInput'

type Props = {};
export default class Login extends Component<Props> {
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
          />
          <ProfileInput
		      	label={'lastname'}
            iconName={'user'}
          />
          <ProfileInput
            label={'city'}
            iconName={'map-marker'}
          />
          <ProfileInput
            label={'bio'}
            iconName={'info'}
          />
        </View>

        <View style={styles.section}>
          <TouchableWithoutFeedback style={styles.Button}>
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