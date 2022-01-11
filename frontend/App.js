import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, FlatList, View, Button } from 'react-native';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

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

	return (
		<>
			<StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
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
			</SafeAreaView>
		</>
	);
}

