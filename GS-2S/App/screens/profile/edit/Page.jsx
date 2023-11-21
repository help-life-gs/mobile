import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputCustom from "../../../components/inputCustom";
import { Formik } from "formik";
import { Feather } from '@expo/vector-icons';
import { baseColor } from "../../../utils/CONSTRAINTS";
import { useRoute } from "@react-navigation/native";
import Button from "../../../components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditUser({ navigation}) {
    const { nome, email } = useRoute().params;

    const updateUser = async (user) => {
        const token = await AsyncStorage.getItem('token');
        const url = 'https://help-life.azurewebsites.net/api/atualizar';

        await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              method: 'PUT',
              body: JSON.stringify(user)
        });
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.title}>Editar Perfil</Text>
                <TouchableOpacity>  
                    <Feather name='x' style={styles.icon} onPress={() => { navigation.navigate('Profile') }} />
                </TouchableOpacity>
            </View>
            <Formik
                initialValues={{ nome: nome, email: email, senha: '' }}
                onSubmit={(values) => {
                    updateUser(values);
                }}
            // validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors, handleBlur }) => (
                    <View style={styles.loginDiv}>

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
                        
                        <InputCustom
                        label={'Senha'}
                        onChange={handleChange('senha')}
                        inputValue={values.senha}
                        onBlur={handleBlur('senha')}
                        isSecure={true}
                    />
                        {errors.email && <Text style={styles.message}>{errors.email}</Text>}

                        <Button title="Salvar" press={handleSubmit}/>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    message: {
        color: 'tomato',
        alignSelf: 'flex-start',
        paddingLeft: '10%'
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
})