import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactItem({ ...item }) {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('chat', {...item});
    }

    const ultimaMensagem = item.mensagens.slice(-1)[0];

    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigation}>
            <View style={styles.contato}>
                <View style={styles.userImg}></View>
                <View>
                    <Text style={styles.username}>{item.participantes.doutor}</Text>
                    <Text style={styles.msg}>{ultimaMensagem.texto}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    contato: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '2%'
    },
    userImg: {
        width: 60,
        height: 60,
        backgroundColor: '#ccc',
        borderRadius: 999,
        marginRight : '4%'
    },
    username: {
        fontSize: 16,
        fontWeight: '900'
    },
    msg: {
        color: '#777'
    }
})