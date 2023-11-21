import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { baseColor } from '../../utils/CONSTRAINTS';

export default function Profile({ navigation }) {

  const [usuario, setUsuario] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsuario();
  }, [])

  const getUsuario = async () => {
    setIsLoading(true);
    const token = await AsyncStorage.getItem('token');

    const url = 'https://help-life.azurewebsites.net/api/perfil';
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'GET',
    });

    setUsuario(await response.json());
    setIsLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity>
          <Feather name='x' style={styles.icon} onPress={() => { navigation.navigate('Triagem') }} />
        </TouchableOpacity>
      </View>
      {isLoading ?
        <ActivityIndicator style={{ flex: 1 }} color={baseColor} size={'large'} /> :
        <View style={styles.perfilData}>
          <TouchableOpacity onPress={() => {navigation.navigate('editUser', {...usuario})}}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/300' }}
              style={{ width: 150, height: 150, borderRadius: 999 }}
            />
          </TouchableOpacity>
          <Text><Text style={{ color: 'tomato', fontWeight: 'bold', fontStyle: 'italic' }}>NOME:</Text> {usuario.nome}</Text>
          <Text><Text style={{ color: 'tomato', fontWeight: 'bold', fontStyle: 'italic' }}>EMAIL: </Text>{usuario.email}</Text>
        </View>

      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  perfilData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
