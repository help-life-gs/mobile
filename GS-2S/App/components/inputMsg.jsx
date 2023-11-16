import { StyleSheet, TextInput } from "react-native";

export default function InputMsg() {
    return(
        <TextInput style={styles.input}/>
    );
}

const styles = StyleSheet.create({
    input : {
        backgroundColor : '#fff',
        width: '80%',
        borderRadius : 15,
        padding : '2%',
        borderWidth : 2,
        borderColor : '#156669'
    }
});