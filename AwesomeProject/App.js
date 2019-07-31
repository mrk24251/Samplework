import React, {Component} from 'react';
import {Platform, StyleSheet,Image, Text, View,ImageBackground} from 'react-native';
import Login1 from './component/ConversationList';
import Login from './component/Login';
import SignUp from './component/SignUp'
import Profile from './component/Profile'
import ConversationList from './component/ConversationList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <ImageBackground source={ require('./img/Lbackground.jpg')} style={{width: '100%', height: '100%'} }>
      //    {/* <Login /> */}
      //   {/* <SignUp /> */}
      //    {/* <Profile /> */}
      // </ImageBackground>
      <ConversationList />
      // <Profile />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
