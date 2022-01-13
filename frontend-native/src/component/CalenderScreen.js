import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileSystem from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';
import CalParser from 'cal-parser';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { globalStyles } from '../../styles/global';



export default function CalenderScreen({ navigation }) {
	const [todoItems, setTodoItems] = React.useState([{text: "Buy groceries", time: 123456, completed: true}, {text: "Make blogpost", time: 1234322, completed: false}])


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
				tempArr.push({text: calEvent.categories.value, time: calEvent.dtend.value, completed: false});
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
			<StatusBar style={globalStyles.titleBar}/>
			<SafeAreaView style={globalStyles.titleContainer}>
				<Text style={globalStyles.titleText}>Todo</Text>
				<FlatList
					data={todoItems}
					style={{flex: 1}} //Mitä tekee hän? -E
					keyExtractor={(item, index) => index.toString()}
					data={todoItems.sort((a,  b) => a.time > b.time ? 1 : -1)}
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