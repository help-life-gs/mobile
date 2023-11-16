import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ButtonMedicao from '../../components/ButtonMedicao';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseColor } from '../../utils/CONSTRAINTS';

export default function Triagem({ navigation }) {

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Medição</Text>
                <TouchableOpacity>
                    <Feather name='calendar' style={styles.icon} onPress={() => {navigation.navigate('historico')}}/>
                </TouchableOpacity>
            </View>
            <ButtonMedicao/>
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
        letterSpacing : 2,
        color : '#fff',
        fontStyle : 'italic'
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : baseColor,
        width : '100%',
        height : '12%',
        alignItems : 'center',
        padding : '5%',
        elevation : 5
    },
    icon : {
        fontSize : 25,
        color : '#fff',
        backgroundColor : '#fff4',
        padding : 10,
        borderRadius : 999,
    }
});
