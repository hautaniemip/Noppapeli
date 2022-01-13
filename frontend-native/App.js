import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, FlatList, View, Button, StatusBar } from 'react-native';
import CalenderScreen from './src/component/CalenderScreen';
import RollDice from './RollDice';

export default function App() {

	const [todoItems, setTodoItems] = React.useState([{text: "Buy groceries", time: 123456, completed: true}, {text: "Make blogpost", time: 1234322, completed: false}])
	const Tab = createBottomTabNavigator();

	  const FriendsScreen = ({ navigation }) => {
		return (
			<SafeAreaView>
				<Text>???</Text>
			</SafeAreaView>
		);
	  };
	  const NoppaScreen = ({ navigation }) => {
		return (
			RollDice()
		);
	  };

	return (
		<NavigationContainer >
			<Tab.Navigator initialRouteName="Noppa">
			  <Tab.Screen
				name="Kaverit"
				component={FriendsScreen}
			  />
			  <Tab.Screen 
			  name="Noppa" 
			  component={NoppaScreen}
			   />
			  <Tab.Screen name="Kalenteri" component={CalenderScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}




