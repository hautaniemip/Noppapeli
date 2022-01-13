import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TodoInput(props) {
	const [text, setText] = React.useState(null);

	function addItem() {
		setText("")
		props.onPress(text)
	}

	return (
		<View style={globalStyles.inputContainer}>
			<TextInput
				style={globalStyles.inputBar}
				onChangeText={text => setText(text)}
				onSubmitEditing={() => addItem()}
				value={text}
			/>
			<TouchableOpacity
				style={globalStyles.inputButton}
				onPress={() => addItem()}>
				<Text style={globalStyles.buttonText}>Add</Text>
			</TouchableOpacity>
		</View>
	);
}

