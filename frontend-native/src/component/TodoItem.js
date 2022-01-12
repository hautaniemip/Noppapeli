import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function TodoItem(props) {
	let style = props.item.completed ? {
		textDecorationLine: 'line-through'
	} : {
		textDecorationLine: 'none'
	}

	return (
		<TouchableOpacity
			onPress={() => props.completeFunction()}
			style={{paddingVerticcal: 8, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
			<View style={{flex: 1}}>
				<Text style={[{fontSize: 18}, style]}>{props.item.text}</Text>
				<Text style={[{fontSize: 18}, style]}>{props.item.time}</Text>
			</View>
			<TouchableOpacity
				style={{padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
				onPress={() => props.deleteFunction()}>
				<Text style={{color: '#fafafa'}}>X</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
