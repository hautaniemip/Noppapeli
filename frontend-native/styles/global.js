import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleBar: {
        barStyle: "light-content",
        backgroundColor: "#212121",
    },
    titleContainer: {
        padding: 16,
        flex: 1
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold'
    },

    
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBar: {
        flex: 1,
        height: 40,
        borderColor: '#212121',
        borderWidth: 1,
        borderRadius: 8
    },
    inputButton: {
        marginLeft: 8,
        padding: 8,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText: {
        color: '#fafafa'
    },


    todoItem: {
        paddingVerticcal: 8,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoTextYes: {
        fontSize: 18,
        textDecorationLine: 'line-through'
    },
    todoTextNo: {
        fontSize: 18,
        textDecorationLine: 'none'
    },
	dateTimeText: {
		fontSize: 16,
		textDecorationLine: 'underline',
		marginHorizontal: 10
	},


    diceContainer: {
        flex: 1,
        backgroundColor: '#CAD5E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diceImage:{
        width:200,
        height:200
    },
    diceTexts:{
        fontSize:26,
        color:'#35BDD0',
        marginTop: 30,
        fontStyle: 'italic',
        paddingHorizontal: 10,
        borderColor: '#30475E',
        borderRadius: 5,
        borderWidth: 3,
        fontWeight: 'bold'
    }
});
