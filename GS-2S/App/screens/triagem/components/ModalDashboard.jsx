// ModalComponent.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { baseColor } from '../../../utils/CONSTRAINTS';

const ModalDashboard = ({ isVisible, closeModal, data }) => {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isVisible}
            onRequestClose={closeModal}
        >
            <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: '5%', borderBottomWidth: 1, borderColor : '#ccc' }}>
                    <Text style={{ fontSize: 22, fontWeight: '900' }}>Dados de Saúde</Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Feather name='chevron-down' size={22} color={'#fff'} style={{ backgroundColor: baseColor, padding: 5, borderRadius: 999, elevation: 2 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex : 1 , justifyContent : 'center'}}>
                    <View style={{alignItems : 'center' , justifyContent : 'center', width: '90%', backgroundColor: '#eee', alignSelf: 'center', padding: '5%', borderRadius: 5, elevation : 2, shadowColor : '#000', marginVertical : '2%', borderWidth : 1, borderColor : '#ccc' }}>
                        <Text style={{ fontSize: 18 }}><Feather name='thermometer' size={18} color={'tomato'} />Temperatura: <Text style={{ fontWeight: '900', color: 'tomato' }}>{data.temperatura}°C</Text></Text>
                    </View>

                    <View style={{alignItems : 'center' ,justifyContent : 'center', width: '90%', backgroundColor: '#eee', alignSelf: 'center', padding: '5%', borderRadius: 5, elevation : 2, shadowColor : '#000', marginVertical : '2%', borderWidth : 1, borderColor : '#ccc' }}>
                        <Text style={{ fontSize: 18 }}><Feather name='heart' size={18} color={'tomato'} /> Batimentos Cardíacos: <Text style={{ fontWeight: '900', color: 'tomato' }}>{data.batimentos_cardiacos} bpm</Text></Text>
                    </View>

                    <View style={{alignItems : 'center' ,justifyContent : 'center', width: '90%', backgroundColor: '#eee', alignSelf: 'center', padding: '5%', borderRadius: 5, elevation : 2, shadowColor : '#000', marginVertical : '2%', borderWidth : 1, borderColor : '#ccc' }}>
                        <Text style={{ fontSize: 18 }}><Feather name='droplet' size={18} color={'tomato'} /> Oxigenação Sanguínea: <Text style={{ fontWeight: '900', color: 'tomato' }}> {data.oxigenacao_sanguinea}%</Text></Text>
                    </View>
                    

                   
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default ModalDashboard;
