'use strict'

var React = require('react');
var ReactNative = require('react-native');
var {
	Text,
	View,
	StyleSheet,
} = ReactNative;

var Signin = require('./components/signin')

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>I am An App</Text>
				<Signin />
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
