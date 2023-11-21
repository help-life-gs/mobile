import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { baseColor } from "../../utils/CONSTRAINTS";

export default function History({ navigation }) {

    useEffect(() => {
        getHistorico();
    }, [])

    const [isLoading, setIsLoading] = useState(false);
    const [historicos, setHistoricos] = useState([]);

    const deleteHistorico = async (id) => {
        const token = await AsyncStorage.getItem('token');
        console.log(id);
        const url = `https://help-life.azurewebsites.net/api/historico/${id}`;
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: 'DELETE',
        })

        if (response.ok) {
            getHistorico();
        }
    }

    function formataData(data) {
        const stringData = String(data);
        return `${stringData.substring(8, 10)}/${stringData.substring(
            5,
            7
        )}/${stringData.substring(0, 4)} - ${stringData.substring(11, 13)}:${stringData.substring(14, 16)}`;
    }

    const getHistorico = async () => {
        const token = await AsyncStorage.getItem('token');
        const url = 'https://help-life.azurewebsites.net/api/historico';
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: 'GET',
        });

        setHistoricos(await response.json());
    }

    const Item = (item) => {

        return (
            <TouchableOpacity>
                <View style={styles.item}>
                    <View>
                        <Text style={{ fontSize: 18, padding: 10 }}><Feather name="heart" color={'tomato'} size={22} /> Batimentos: <Text style={{ fontWeight: '900' }}>{item.batimentos}</Text></Text>
                        <Text style={{ fontSize: 18, padding: 10 }}><Feather name="thermometer" color={'tomato'} size={22} />Temperatura: <Text style={{ fontWeight: '900' }}>{item.temperatura}</Text></Text>
                        <Text style={{ fontSize: 18, padding: 10 }}><Feather name="droplet" color={'tomato'} size={22} />Oxigênio: <Text style={{ fontWeight: '900' }}>{item.oxigenio}</Text></Text>
                        <Text style={{ fontSize: 18, padding: 10 }}><Feather name="clock" color={'tomato'} size={22} />Data: <Text style={{ fontWeight: '900' }}>{formataData(item.dataMedicao)}</Text></Text>
                    </View>
                    <TouchableOpacity onPress={() => { deleteHistorico(item.id) }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 10, backgroundColor: 'tomato', borderRadius: 999, elevation: 2, marginRight : '5%' }}>
                            <Feather name="trash-2" size={22} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Histórico</Text>
                <TouchableOpacity>
                    <Feather name='x' style={styles.icon} onPress={() => { navigation.navigate('Triagem') }} />
                </TouchableOpacity>
            </View>
            {isLoading ?
                <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems : 'center'}} color={baseColor} size={'large'}/> :
                <FlatList
                    data={historicos}
                    style={{ flex: 1, padding: '3%' }}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={(item) => item.id}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        borderWidth: .5,
        borderColor: '#333',
        borderRadius: 999,

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#fff',
        fontStyle: 'italic'
    },
    item: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginTop: 15,
        elevation: 2,
        borderWidth: .5,
        borderColor: '#666',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});