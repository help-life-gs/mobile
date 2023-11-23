import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native';
import InputCustom from '../../components/inputCustom';
import Button from '../../components/button';
import { useAuth } from '../../context/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseColor } from '../../utils/CONSTRAINTS';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Auth({ navigation }) {

  const { loginNavigation, logout } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [isDesativado, setIsDesativado] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email('Insira um email válido').required('Email obrigatório*'),
    senha: yup.string().required('Senha obrigatória*'),
  });

  const handleLogin = async (login) => {
    setIsLoading(true);
    setIsDesativado(true);

    try {
      const url = 'https://help-life.azurewebsites.net/api/login';
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': ''
        },
        method: 'POST',
        body: JSON.stringify(login)
      });
      const resp = await response.json();

      const user = JSON.stringify(resp.usuario);
      const token = resp.token.token;

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', user);

    } catch (err) {
      Alert.alert('Erro ao fazer login, tente novamente.')
    }
    finally {
      setIsLoading(false);
      setIsDesativado(false);
      loginNavigation();
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerLogin}>
        <Image style={{ height: 250, width: 250 }} source={require('../../assets/logo_help.png')} />
      </View>
      <Formik
        initialValues={{ email: '', senha: '' }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, handleBlur }) => (
          <View style={styles.loginDiv}>

            <InputCustom
              label={'Email'}
              onChange={handleChange('email')}
              inputValue={values.email}
              onBlur={handleBlur('email')}
            />
            {errors.email && <Text style={styles.message}>{errors.email}</Text>}

            <InputCustom
              label={'Senha'}
              onChange={handleChange('senha')}
              inputValue={values.senha}
              onBlur={handleBlur('senha')}
              isSecure={true}
            />
            {errors.senha && <Text style={styles.message}>{errors.senha}</Text>}

            {isLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color={baseColor} />
              </View>
            )}

            <Button press={handleSubmit} title={'LOGIN'} desativado={isDesativado} />
            <View style={styles.cadastro}>
              <TouchableOpacity onPress={() => { navigation.navigate('cadastro') }}>
                <Text style={styles.cadastroLink}>CRIAR CONTA</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: baseColor
  },
  message: {
    color: 'tomato',
    alignSelf: 'flex-start',
    paddingLeft: '10%'
  },
  loginDiv: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    paddingVertical: '5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
  },
  headerLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  welcome: {
    fontSize: 26,
    fontWeight: '300',
    letterSpacing: 2
  },
  welcomeText: {
    fontStyle: 'italic',
    fontWeight: '900'
  },
  cadastro: {
    padding: 10
  },
  cadastroLink: {
    color: baseColor,
    padding: 5
  }
});
