import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Intl from 'react-native-intl';

export default function TodoItem(props) {
	const [time, setTime] = React.useState('');
	let style = props.item.completed ? {
		textDecorationLine: 'line-through'
	} : {
		textDecorationLine: 'none'
	}

	function formatTime(_time) {
		let options = {hour: 'numeric', minute: 'numeric', hour12: false, hourCycle: 'h23'}
		new Intl.DateTimeFormat('fi-FI', options).format(_time).then(
			str => {
				console.log(str);
				setTime(str.slice(0, -3));
		});
	}

	return (
		<TouchableOpacity
			onPress={() => props.completeFunction()}
			style={{paddingVerticcal: 8, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
			<View style={{flex: 1}}>
				<Text style={[{fontSize: 18}, style]}>{props.item.text}</Text>
				<Text style={[{fontSize: 18}, style]} onLayout={formatTime(props.item.time)}>{time}</Text>
			</View>
			<TouchableOpacity
				style={{padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
				onPress={() => props.deleteFunction()}>
				<Text style={{color: '#fafafa'}}>X</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
