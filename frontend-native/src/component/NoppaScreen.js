import React from 'react'
import { TouchableOpacity, Text, View, StatusBar, Image } from 'react-native';
import { globalStyles } from '../../styles/global';

import Dice1 from '../../assets/images/dice1.png';
import Dice2 from '../../assets/images/dice2.png';
import Dice3 from '../../assets/images/dice3.png';
import Dice4 from '../../assets/images/dice4.png';
import Dice5 from '../../assets/images/dice5.png';
import Dice6 from '../../assets/images/dice6.png';


export default function RollDice() {
	const [uri, setUri] = React.useState(Dice1);

	function rollDice() {
		let rand = Math.floor(Math.random() * 6) + 1;

		switch(rand) {
			case 1: setUri(Dice1);
				break;
			case 2: setUri(Dice2);
				break;
			case 3: setUri(Dice3);
				break;
			case 4: setUri(Dice4);
				break;
			case 5: setUri(Dice5);
				break;
			case 6: setUri(Dice6);
				break;
			default: setUri(Dice1);
		}
	}

	return(
    <View style={globalStyles.diceContainer}>
      <Image 
        style={globalStyles.diceImage} 
        source={uri}
      />
      <TouchableOpacity onPress={rollDice}>
        <Text style={globalStyles.diceTexts}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  )
};
