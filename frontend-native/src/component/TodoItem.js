import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TodoItem(props) {
	const [time, setTime] = React.useState();
	let textStyle = props.item.completed ? globalStyles.todoTextYes : globalStyles.todoTextNo;

	return (
		<TouchableOpacity
			onPress={() => props.completeFunction()}
			style={globalStyles.todoItem}>
			<View style={{flex: 1}}>
				<Text style={textStyle}>{props.item.text}</Text>
				<Text style={textStyle}>{props.item.formatedTime}</Text>
			</View>
			<TouchableOpacity
				style={globalStyles.inputButton}
				onPress={() => props.deleteFunction()}>
				<Text style={globalStyles.buttonText}>X</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
