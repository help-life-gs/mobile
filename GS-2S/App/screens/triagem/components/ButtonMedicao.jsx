import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { baseColor } from "../../../utils/CONSTRAINTS";

export default function ButtonMedicao({press}) {
    return (
        <TouchableOpacity style={styles.button} onPress={press}>
            <Text style={styles.buttonText}>Medir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : 150,
        borderRadius : 999,
        height : 150,
        backgroundColor : baseColor,
        alignItems : 'center',
        justifyContent : 'center',
        elevation : 5,
        borderWidth : .5,
        transform:[{rotate : '-45deg'}]
    },
    buttonText : {
        fontSize : 18,
        letterSpacing : 2,
        fontWeight : '700',
        color : '#fff'
    }
})