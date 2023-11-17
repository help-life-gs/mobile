import { TouchableOpacity, ScrollView, StyleSheet, Text, View, FlatList, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputMsg from '../../components/inputMsg';
import { Feather } from '@expo/vector-icons';
import { baseColor } from '../../utils/CONSTRAINTS';
import { useNavigation } from '@react-navigation/native';
import MessageBox from './components/MessageBox';

export default function Chat(item) {

    const navigation = useNavigation();

    const { participantes, mensagens } = item.route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate('contacts') }}>
                    <Feather size={30} name='arrow-left' />
                    <View style={styles.userImg}>

                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>
                    {participantes.doutor}
                </Text>
            </View>

            <View style={styles.chatBox}>
                <FlatList
                    data={mensagens}
                    renderItem={({ item }) => <MessageBox {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>

            <KeyboardAvoidingView style={styles.typingBox}>
                <InputMsg />
                <TouchableOpacity style={styles.sendBtn}>
                    <Feather name='send' size={22} style={{ color: baseColor, backgroundColor: '#eee', padding: '15%', borderRadius: 10, borderWidth : 2, borderColor : baseColor }} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: '5%',
        color: '#fff'
    },
    header: {
        width: '100%',
        backgroundColor: baseColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '4%',
        paddingHorizontal: 5
    },
    typingBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: 'transparent',
        elevation: 1
    },
    chatBox: {
        width: '100%',
        flex : 1
    },
    userImg: {
        backgroundColor: '#3dc',
        width: 48,
        height: 48,
        borderRadius: 999,
        elevation: 2
    },
    sendBtn: {
        width: '15%',
        borderRadius: 10,
        alignItems: 'center',
    }
});
