import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import { Formik } from 'formik';
import InputCustom from '../../components/inputCustom';
import { baseColor } from '../../utils/CONSTRAINTS';

export default function New({ navigation }) {

  const validationSchema = yup.object().shape({
    nome: yup.string().required('Nome obrigatório*'),
    email: yup.string().email('Insira um email válido*').required('Email obrigatório*'),
    data: yup.string().required('Data obrigatória*'),
    telefone: yup.string().required('Telefone obrigatório*'),
    senha: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('A senha é obrigatória*')
  });


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Cadastre-se agora</Text>
      <Text style={styles.subtitle}>Venha conhecer nosso serviço!</Text>

      <Formik
        initialValues={{ nome: '', email: '', data: '', telefone: '', senha: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('endereco');
        }}
        // validationSchema={validationSchema}
      >
        {
          ({ handleChange, handleSubmit, values, errors, handleBlur }) => (
            <ScrollView style={styles.cadastroDiv}>
              <View style={{paddingVertical : '5%'}}>
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
                onChange={handleChange('data')}
                inputValue={values.data}
                onBlur={handleBlur('data')}
              />
              {errors.data && <Text style={styles.message}>{errors.data}</Text>}

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

              <Button title={'Próximo'} press={handleSubmit} />
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
  message : {
    color : 'tomato',
    alignSelf : 'flex-start',
    paddingLeft : '10%'
  },
  subtitle : {
    color : baseColor,
    padding : 5
  }
});
