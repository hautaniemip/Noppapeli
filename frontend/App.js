import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, FlatList, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

let RNFS = require('react-native-fs')

export default function App() {

	const [todoItems, setTodoItems] = React.useState([{text: "Buy groceries", completed: true}, {text: "Make blogpost", completed: false}])


	function addTodoItem(_text)  {
		setTodoItems([...todoItems, {text: _text, completed: false}]);
	}

	function deleteTodoItem(_index) {
		let tempArr = [...todoItems];
		tempArr.splice(_index, 1);
		setTodoItems(tempArr);
	}

	function completeTodoItem(_index) {
		let tempArr = [...todoItems];
		tempArr[_index].completed = true;
		setTodoItems(tempArr)
	}

	async function pickFile() {
		const res = await DocumentPicker.getDocumentAsync({type: '*/*'});
		console.log('res : ' + JSON.stringify(res));
		console.log('URI : ' + res.uri);
		console.log('Type : ' + res.type);
		console.log('File Name : ' + res.name);
		console.log('File Size : ' + res.size);
		if (res.type === 'cancel') return;
		const info = await RNFS.readFile(res.uri)
		//const info = await FileSystem.readAsStringAsync(res.uri);
		console.log(info);
	};

	return (
		<>
		<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
			<SafeAreaView style={{padding: 16}}>
				<Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
				<FlatList
					data={todoItems}
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
				<TouchableOpacity
					style={{padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
					onPress={pickFile}>
					<Text style={{color: '#fafafa'}}>Pick File...</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
}

