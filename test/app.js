import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import Button from "./button";

const styles = StyleSheet.create({
	view: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	},
	message: {
		color: "red",
	}
});
const buttonStyles = StyleSheet.create({
	view: {
		marginTop: 5
	}
});

export default class APP extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: "",
			disabled: false
		};
	}

	message(message) {
		this.setState(Object.assign({}, this.state, {message}));
	}

	disable() {
		this.setState(Object.assign({}, this.state, {disabled: true}));
	}

	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.message}>{this.state.message}</Text>
				<Button
					styles={buttonStyles}
					disabled={true}>disabled</Button>
				<Button styles={buttonStyles} onPress={event=>{
						this.message("i am pressed");
					}}>button</Button>
				<Button styles={buttonStyles} onPress={(event,callback)=>{
					this.message("begin fetch ...");
					setTimeout(()=>{
						this.message("end fetch")
						callback();
					},2000);
				}}>async button</Button>
				<Button styles={{view:{
					marginTop:5,
					borderRadius:10
				}}}>border readius button</Button>
				<Button styles={buttonStyles}
						onPress={event=>{
						this.message("image button is pressed")
					}}>
					<Image source={require("./assets/button.png")}/>
				</Button>
				<Button
					disabled={this.state.disabled}
					styles={buttonStyles}
					onPress={event=>{
						this.disable();
					}}>disable when press</Button>
			</View>
		);
	}
}