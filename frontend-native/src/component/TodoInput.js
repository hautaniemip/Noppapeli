import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../../styles/global';

export default function TodoInput(props) {
	const [text, setText] = React.useState(null);
	const [date, setDate] = React.useState(new Date());
	const [mode, setMode] = React.useState('date');
	const [show, setShow] = React.useState(false);

	function onChange(event, selectedDate) {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	function showMode(currentMode) {
		setShow(true);
		setMode(currentMode);
	};

	function showDatepicker() {
		showMode('date');
	};

	function showTimepicker() {
		showMode('time');
	};

	function addItem() {
		setText("")
		props.onPress(text)
	}

	function formatTime(_time) {
		_time = new Date(_time);
		console.log(_time);
		let formatedTime = `${_time.getDate()}.${_time.getMonth() + 1}.${_time.getFullYear()} ${_time.getHours().toString().padStart(2, '0')}:${_time.getMinutes().toString().padStart(2, '0')}`;
		console.log(formatedTime);
		return formatedTime;
	}

	return (
		<>
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
			<View style={globalStyles.inputContainer}>
				<TouchableOpacity style={{flex: 1}} onPress={showDatepicker}>
					<Text style={[globalStyles.dateTimeText, {textAlign: 'right'}]}>{formatTime(date).slice(0, -6)}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex: 1}} onPress={showTimepicker}>
					<Text style={globalStyles.dateTimeText}>{formatTime(date).slice(-6)}</Text>
				</TouchableOpacity>
			</View>
			{show && (
			<DateTimePicker
				testID="dateTimePicker"
				value={date}
				mode={mode}
				is24Hour={true}
				display="default"
				onChange={onChange}
			/>
			)}
		</>
	);
}

