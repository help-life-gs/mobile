import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import InputCustom from "../../../components/inputCustom";
import * as yup from 'yup';
import { baseColor } from "../../../utils/CONSTRAINTS";
import { useState } from "react";

export default function NewEndereco() {

  const [isLoading, setIsLoading] = useState(false);
  const [isDesativado, setIsDesativado] = useState(false);

  const validationSchema = yup.object().shape({
    cep: yup.string().required('CEP obrigatório*'),
    estado: yup.string().required('Estado obrigatório*'),
    cidade: yup.string().required('Cidade obrigatória*'),
    logradouro: yup.string().required('Logradouro obrigatório*'),
    numero: yup.number().required('Número obrigatório*')
  });

  const handleEndereco = async (endereco) => {

    setIsDesativado(true);
    setIsLoading(true);

    //alterar end point

    try {
      const url = 'https://help-life.azurewebsites.net/api/endereco';
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(endereco)
      });

      if (response.ok) {
        console.log('Endereco cadastrado com sucesso!');
        navigation.navigate('endereco');
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

      <Text style={styles.title}>Falta pouco!</Text>
      <Text style={styles.subtitle}>Complete seu cadastro</Text>
      <Formik
        initialValues={{ cep: '', estado: '', cidade: '', logradouro: '', numero: '' }}
        onSubmit={(values) => {
          handleEndereco(values);
        }}
        validationSchema={validationSchema}
      >
        {
          ({ handleChange, handleSubmit, values, errors, handleBlur }) => (
            <ScrollView style={styles.cadastroDiv}>
              <View style={{ paddingVertical: '5%' }}>
                <InputCustom
                  label={'CEP'}
                  onChange={handleChange('cep')}
                  inputValue={values.cep}
                  onBlur={handleBlur('cep')}
                />
                {errors.cep && <Text style={styles.message}>{errors.cep}</Text>}

                <InputCustom
                  label={'Estado'}
                  onChange={handleChange('estado')}
                  inputValue={values.estado}
                  onBlur={handleBlur('estado')}
                />
                {errors.estado && <Text style={styles.message}>{errors.estado}</Text>}

                <InputCustom
                  label={'Cidade'}
                  onChange={handleChange('cidade')}
                  inputValue={values.cidade}
                  onBlur={handleBlur('cidade')}
                />
                {errors.cidade && <Text style={styles.message}>{errors.cidade}</Text>}

                <InputCustom
                  label={'Logradouro'}
                  onChange={handleChange('logradouro')}
                  inputValue={values.logradouro}
                  onBlur={handleBlur('logradouro')}
                />
                {errors.logradouro && <Text style={styles.message}>{errors.logradouro}</Text>}

                <InputCustom
                  label={'Número'}
                  onChange={handleChange('numero')}
                  inputValue={values.numero}
                  onBlur={handleBlur('numero')}
                />
                {errors.numero && <Text style={styles.message}>{errors.numero}</Text>}

                {isLoading && (
                  <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color={baseColor} />
                  </View>
                )}

                <Button title={'Cadastrar'} press={handleSubmit} desativado={isDesativado}/>
              </View>
            </ScrollView>
          )
        }
      </Formik>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
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