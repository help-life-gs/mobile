import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import { Formik } from 'formik';
import InputCustom from '../../components/inputCustom';
import { baseColor } from '../../utils/CONSTRAINTS';
import { useState } from 'react';

export default function New({ navigation }) {

  const formataData = (data) => {
    const stringData = String(data)
      .split("")
      .filter((e) => e.match(/\d/g, ""))
      .join("")
      .padEnd(18, "0");
  
    return `${stringData.substring(4, 8)}-${stringData.substring(2,4)}-${stringData.substring(0, 2)}T${stringData.substring(8,10)}:${stringData.substring(10, 12)}:${stringData.substring(12,14)}+${stringData.substring(14, 16)}:${stringData.substring(16,18)}`;
  }

  const validationSchema = yup.object().shape({
    nome: yup.string().required('Nome obrigatório*'),
    email: yup.string().email('Insira um email válido*').required('Email obrigatório*'),
    dataNasc: yup
      .string()
      .test('formato-isoDate', 'Formato de data inválido. Use o formato (dd-mm-aaaa).', value => {
        return value ? /^\d{2}-\d{2}-\d{4}$/.test(value) : true;
      })
      .required('Data obrigatória*'),
    telefone: yup.string().required('Telefone obrigatório*'),
    senha: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('A senha é obrigatória*')
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isDesativado, setIsDesativado] = useState(false);

  const handleCadastro = async (pessoa) => {
    setIsDesativado(true);
    setIsLoading(true);

    try {
      const url = 'https://help-life.azurewebsites.net/api/registrar';
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(pessoa)
      });

      if (response.ok) {
        console.log('Cadastro realizado com sucesso!');
        navigation.navigate('endereco', {});
      } else {
        console.error('Erro ao cadastrar:', response.status);
      }
    } catch (error) {
      console.error('Erro na chamada da API:', error);
    } finally {
      setIsLoading(false);
      setIsDesativado(false);
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Cadastre-se agora</Text>
      <Text style={styles.subtitle}>Venha conhecer nosso serviço!</Text>

      <Formik
        initialValues={{ nome: '', email: '', dataNasc: '', telefone: '', senha: '' }}
        onSubmit={(values) => {
          values.dataNasc = formataData(values.dataNasc);
          handleCadastro(values)
            .then(() => navigation.navigate('endereco'));
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {
          ({ handleChange, handleSubmit, values, errors, handleBlur }) => (
            <ScrollView style={styles.cadastroDiv}>
              <View style={{ paddingVertical: '5%' }}>
                <InputCustom
                  label={'Nome'}
                  onChange={handleChange('nome')}
                  inputValue={values.nome}
                  onBlur={handleBlur('nome')}
                />
                {errors.nome && <Text style={styles.message}>{errors.nome}</Text>}

                <InputCustom
                  label={'Email'}
                  onChange={handleChange('email')}
                  inputValue={values.email}
                  onBlur={handleBlur('email')}
                />
                {errors.email && <Text style={styles.message}>{errors.email}</Text>}

                <InputCustom
                  label={'Data de nascimento'}
                  onChange={handleChange('dataNasc')}
                  inputValue={values.dataNasc}
                  onBlur={handleBlur('dataNasc')}
                />
                {errors.dataNasc && <Text style={styles.message}>{errors.dataNasc}</Text>}

                <InputCustom
                  label={'Telefone'}
                  onChange={handleChange('telefone')}
                  inputValue={values.telefone}
                  onBlur={handleBlur('telefone')}
                />
                {errors.telefone && <Text style={styles.message}>{errors.telefone}</Text>}

                <InputCustom
                  label={'Crie uma senha'}
                  onChange={handleChange('senha')}
                  inputValue={values.senha}
                  onBlur={handleBlur('senha')}
                />
                {errors.senha && <Text style={styles.message}>{errors.senha}</Text>}

                {isLoading && (
                  <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color={baseColor} />
                  </View>
                )}
                <Button title={'Próximo'} press={handleSubmit} desativado={isDesativado} />

              </View>
            </ScrollView>
          )
        }
      </Formik>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cadastroDiv: {
    width: '100%',
  },
  message: {
    color: 'tomato',
    alignSelf: 'flex-start',
    paddingLeft: '10%'
  },
  subtitle: {
    color: baseColor,
    padding: 5
  }
});
