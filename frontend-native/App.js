import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalenderScreen from './src/component/CalenderScreen';
import SocialScreen from './src/component/SocialScreen';
import NoppaScreen from './src/component/NoppaScreen';

export default function App() {

	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer >
			<Tab.Navigator initialRouteName="Noppa">
			  <Tab.Screen
				name="Kaverit"
				component={SocialScreen}
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




