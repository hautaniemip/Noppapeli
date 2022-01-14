import React from "react"
import { Text, SafeAreaView } from 'react-native'
import { globalStyles } from '../../styles/global'


export default function SocialScreen({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.socialContainer}>
			<Text style={globalStyles.socialText}>Coming Soon...</Text>
        </SafeAreaView>
    );
}
