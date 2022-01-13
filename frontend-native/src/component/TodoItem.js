import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function TodoItem(props) {
	const [time, setTime] = React.useState();
	let style = props.item.completed ? {
		textDecorationLine: 'line-through'
	} : {
		textDecorationLine: 'none'
	}

	function formatTime(_time) {
		_time = new Date(_time);
		console.log(_time);
		let formatedTime = `${_time.getDate()}.${_time.getMonth() + 1}.${_time.getFullYear()} ${_time.getHours().toString().padStart(2, '0')}:${_time.getMinutes().toString().padStart(2, '0')}`;
		console.log(formatedTime);
		setTime(formatedTime);
	}

	return (
		<TouchableOpacity
			onPress={() => props.completeFunction()}
			style={{paddingVerticcal: 8, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
			<View style={{flex: 1}}>
				<Text style={[{fontSize: 18}, style]}>{props.item.text}</Text>
				<Text style={[{fontSize: 18}, style]}>{props.item.formatedTime}</Text>
			</View>
			<TouchableOpacity
				style={{padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
				onPress={() => props.deleteFunction()}>
				<Text style={{color: '#fafafa'}}>X</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
