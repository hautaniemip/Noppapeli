import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileSystem from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';
import CalParser from 'cal-parser';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';



export default function CalenderScreen({ navigation }) {
	const [todoItems, setTodoItems] = React.useState([{text: "Buy groceries", time: new Date(123456), formatedTime: formatTime(new Date(123456)), completed: true}, {text: "Make blogpost", time: new Date(1234322), formatedTime: formatTime(new Date(1234322)), completed: false}])


    function addTodoItem(_text)  {
		if (_text) {
			setTodoItems([{text: _text, time: new Date(0), formatedTime: formatTime(new Date(0)), completed: false}, ...todoItems]);
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

	function formatTime(_time) {
		_time = new Date(_time);
		console.log(_time);
		let formatedTime = `${_time.getDate()}.${_time.getMonth() + 1}.${_time.getFullYear()} ${_time.getHours().toString().padStart(2, '0')}:${_time.getMinutes().toString().padStart(2, '0')}`;
		console.log(formatedTime);
		return formatedTime;
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
				tempArr.push({text: calEvent.categories.value, time: calEvent.dtend.value, formatedTime: formatTime(calEvent.dtend.value), completed: false});
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
					data={todoItems.sort((a,  b) => a.time >= b.time ? 1 : -1)}
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
