import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputCustom({ onChange, inputValue, blur, label, isSecure }) {


    return (
        <View style={styles.inputComponent}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={blur}
                value={inputValue}
                secureTextEntry={isSecure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomWidth: 2,
        borderColor: '#156669',
        backgroundColor : '#eee',
        padding: 5,
        borderRadius : 5,
        elevation : 2
    },
    inputComponent : {
       width : '100%',
       alignItems : 'center',
       paddingVertical : 10
    },
    label : {
        alignSelf : 'flex-start',
        paddingLeft : '10%',
        fontSize : 16,
        fontWeight : '600',
        padding : 5
    }
})