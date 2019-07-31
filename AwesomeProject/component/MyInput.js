import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default class MyInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={ this.props.placeholder }
        secureTextEntry={true}
        keyboardType = { this.props.keyboardType }
        onChangeText={(text) => {
            this.props.onType(text, this.props.inputName)
          }
        }
      />
    );
  }
}
  
  
const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    padding: 10,
	marginBottom: 10,
	paddingLeft: 52,
	backgroundColor: '#FFFFFF70',
  },
});
