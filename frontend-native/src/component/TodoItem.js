import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TodoItem(props) {
	const [time, setTime] = React.useState(formatTime(props.item.time));
	let textStyle = props.item.completed ? globalStyles.todoTextYes : globalStyles.todoTextNo;

	function formatTime(_time) {
		_time = new Date(_time);
		console.log(_time);
		let formatedTime = `${_time.getDate()}.${_time.getMonth() + 1}.${_time.getFullYear()} ${_time.getHours().toString().padStart(2, '0')}:${_time.getMinutes().toString().padStart(2, '0')}`;
		console.log(formatedTime);
		return formatedTime;
	}

	return (
		<TouchableOpacity
			onPress={() => props.completeFunction()}
			style={globalStyles.todoItem}>
			<View style={{flex: 1}}>
				<Text style={textStyle}>{props.item.text}</Text>
				<Text style={textStyle}>{time}</Text>
			</View>
			<TouchableOpacity
				style={globalStyles.inputButton}
				onPress={() => props.deleteFunction()}>
				<Text style={globalStyles.buttonText}>X</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
