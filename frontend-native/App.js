import React from 'react'
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, FlatList, View, Button, StatusBar } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileSystem from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';
import CalParser from 'cal-parser';
import TodoInput from './src/component/TodoInput';
import TodoItem from './src/component/TodoItem';

export default function App() {

	const [todoItems, setTodoItems] = React.useState([{text: "Buy groceries", time: "123456", completed: true}, {text: "Make blogpost", time: "12343221", completed: false}])


	function addTodoItem(_text)  {
		if (_text) {
			setTodoItems([...todoItems, {text: _text, time: "0", completed: false}]);
		}
	}

	function deleteTodoItem(_index) {
		let tempArr = [...todoItems];
		tempArr.splice(_index, 1);
		setTodoItems(tempArr);
	}

	function completeTodoItem(_index) {
		let tempArr = [...todoItems];
		tempArr[_index].completed = !tempArr[_index].completed;
		setTodoItems(tempArr)
	}

	async function pickFile() {
		try {
			console.log(DeviceInfo.getUniqueId());
			const res = await DocumentPicker.pickSingle({type: 'text/calendar'});
			const data = await FileSystem.readFile(res.uri);
			const parsedCal = CalParser.parseString(data);
			console.log(parsedCal.events);
			let tempArr = []
			for (const calEvent of parsedCal.events) {
				tempArr.push({text: calEvent.categories.value, time: calEvent.dtend.value.toString().slice(0, -18), completed: false});
				console.log(calEvent);
			}
			setTodoItems([...todoItems, ...tempArr]);
		} catch (e) {
			if (DocumentPicker.isCancel(e)) {
				console.warn('Canceled')
			} else {
				throw e
			}
		}
	}

	return (
		<>
			<StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
			<SafeAreaView style={{padding: 16, flex: 1}}>
				<Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
				<FlatList
					data={todoItems}
					style={{flex: 1}}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item, index}) => {
						return (
							<TodoItem
								item={item}
								deleteFunction={() => deleteTodoItem(index)}
								completeFunction={() => completeTodoItem(index)}
							/>
						)
					}}
				/>
				<TodoInput onPress={addTodoItem} />
				<TouchableOpacity onPress={pickFile}>
					<Text>Pick File...</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
}


