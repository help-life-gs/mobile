import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonMedicao() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Medir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : 150,
        height : 150,
        backgroundColor : '#156669',
        borderRadius : 999,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 10,
        borderWidth :2,
        borderColor : '#ccc',
        marginTop : '50%'
    },
    buttonText : {
        fontSize : 18,
        letterSpacing : 2,
        fontWeight : '700',
        color : '#fff'
    }
})