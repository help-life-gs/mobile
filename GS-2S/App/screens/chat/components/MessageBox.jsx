import { FlatList, StyleSheet, Text, View } from "react-native";

export default function MessageBox({ ...item }) {
   
    const estiloCaixa = item.remetente === 'doutor' ? styles.boxReceive : styles.boxSend;
    const estiloTexto = item.remetente === 'doutor' ? styles.textReceive : styles.textSend;

    return(
        <View style={estiloCaixa}>
            <Text style={estiloTexto}>{item.texto}</Text>
        </View>
    );
}

const tamanhoDaFonte = 14; 

const lineHeight = tamanhoDaFonte * 1.5;

const styles = StyleSheet.create({
    boxSend : {
        padding : 10,
        marginVertical : '2%',
    },
    boxReceive : {
        padding : 10,
        marginVertical : '2%',
    },
    textReceive : {
        backgroundColor : '#000',
        alignSelf : 'flex-start',
        maxWidth : '80%',
        color : '#fff',
        padding : '5%',
        borderBottomLeftRadius : 30,
        borderTopRightRadius : 30,
        borderBottomRightRadius : 30,
        lineHeight : lineHeight,
        fontSize : tamanhoDaFonte,
        elevation : 5
    },
    textSend : {
        alignSelf : 'flex-end',
        backgroundColor : '#ccc',
        padding : '5%',
        borderTopLeftRadius : 30,
        borderBottomRightRadius : 30,
        borderBottomLeftRadius : 30,
        lineHeight : lineHeight,
        fontSize : tamanhoDaFonte,
        elevation : 5
    }
})