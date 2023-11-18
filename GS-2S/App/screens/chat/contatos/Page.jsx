import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { database } from '../../../config/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseColor } from '../../../utils/CONSTRAINTS';
import { Feather } from '@expo/vector-icons';

export default function Contatos() {
    const [contatos, setContatos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const collectionRef = collection(database, 'contatos');
        const q = query(collectionRef, orderBy('nome'));

        const unsubscribe = onSnapshot(q, snapshot => {
            setContatos(
                snapshot.docs.map(doc => ({
                    contatoId: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                }))
            );
        });

        return () => unsubscribe();
    }, []);

    const handleChatPress = (email, contatoNome) => {
        console.log(email);
        navigation.navigate('conversas', { email, contatoNome });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Contatos</Text>
            </View>
            <FlatList
                data={contatos}
                keyExtractor={(item) => item.contatoId}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleChatPress(item.email, item.nome)}>
                        <View style={styles.contato}>
                            <Text style={{fontSize : 18}}>{item.nome}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#fff',
        fontStyle: 'italic'
    },
    contato: {
        backgroundColor: '#eee',
        borderBottomWidth : 1,
        borderColor : '#ccc',
        flexDirection: 'row',
        padding : '5%',
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
});
