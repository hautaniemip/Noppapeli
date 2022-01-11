import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';

export default function TodoInput(props) {
	const [text, setText] = useState(null);

	return (
		<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
			<TextInput
				style={{flex: 1, height: 40, borderColor: '#212121', borderWidth: 1, borderRadius: 8}}
				onChangeText={text => setText(text)}
				value={text}
			/>
			<TouchableOpacity
				style={{marginLeft: 8, padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
				onPress={() => props.onPress(text)}>
				<Text style={{color: '#fafafa'}}>Add</Text>
			</TouchableOpacity>
		</View>
	);
}
