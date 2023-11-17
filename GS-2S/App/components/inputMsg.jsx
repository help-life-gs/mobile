import { StyleSheet, TextInput } from "react-native";

export default function InputMsg({ valor, setMsg}) {
    return(
        <TextInput style={styles.input} value={valor} onChangeText={setMsg}/>
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