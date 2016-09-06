'use strict'

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = ReactNative;

var Button = require('./common/button');

module.exports = React.createClass ({
  render: function() {
    return (
	    <View style={styles.buttonWrapper}>
	      <Button text={'Start'} onPress={this.handleStart}/>
	      <Button text={'FAQs'} onPress={this.handleFaq}/>
	      <Button text={'App Info'} onPress={this.handleApp}/>   
	  	</View>   
    );
  },

  handleStart: function() {
    console.log("button S pressed")
  },

  handleFaq: function() {
    console.log("button F pressed")
  },

  handleApp: function() {
    console.log("button A pressed")
  },

 

})


var styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },


})