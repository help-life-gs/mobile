import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ButtonMedicao from './components/ButtonMedicao';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseColor } from '../../utils/CONSTRAINTS';
import ModalDashboard from './components/ModalDashboard';
import { useState } from 'react';

export default function Triagem({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    const data = {
        temperatura: 36.7,
        batimentos_cardiacos: 75,
        oxigenacao_sanguinea: 98,
    };

    //chamar essa função na requisição com loading !!!
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Medição</Text>
                <TouchableOpacity>
                    <Feather name='calendar' style={styles.icon} onPress={() => { navigation.navigate('historico') }} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonMedicao press={openModal} />
            </View>

            <ModalDashboard isVisible={modalVisible} closeModal={closeModal} data={data} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#fff',
        fontStyle: 'italic'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: baseColor,
        width: '100%',
        alignItems: 'center',
        padding: '5%',
        elevation: 5
    },
    icon: {
        fontSize: 25,
        color: '#fff',
        backgroundColor: '#fff4',
        padding: 10,
        borderWidth : .5,
        borderColor : '#333',
        borderRadius: 999,

    },
    buttonContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#eee',
        margin : '50%',
        padding : '10%',
        borderRadius : 999,
        transform : [{rotate : '45deg' }],
        elevation : 2,
        borderWidth : 1,
        borderColor : 'transparent'
    }
});
