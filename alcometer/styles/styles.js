import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
        margin: 0,
      },
    button: {
        width: 120,
        backgroundColor: 'red',
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        fontWeight: 'bold',
        borderRadius: 5,
        overflow: "hidden",
    },
    textInput: {
        borderWidth:1, 
        padding: 5,
        width: 150
    },
    radio: {
        color: 'black',
        borderWidth: 1,
    },
    header: {
        color: '#705000',
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 10
    },
});