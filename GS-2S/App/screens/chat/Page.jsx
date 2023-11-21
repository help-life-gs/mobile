import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { baseColor } from '../../utils/CONSTRAINTS';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot,
    where
} from "firebase/firestore"

import { auth, database } from '../../config/firebaseConfig';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Bubble, Composer, GiftedChat } from 'react-native-gifted-chat';
import React, { useState, useLayoutEffect, useCallback } from 'react';

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);

    const { email } = useRoute().params;

    useLayoutEffect(() => {
        console.log(auth.currentUser.email);
        setIsLoading(true);
        const collectionRef = collection(database, 'chats');
        const q = query(
            collectionRef,
            where('user._id', 'in', [auth.currentUser.email, email]),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot');
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [navigation, email]);



    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        console.log(messages);

        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, 'chats'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
            {isLoading ?
                <View style={{ flex: 1, alignItems : 'center', justifyContent : 'center' }}>
                    <ActivityIndicator size={'large'} color={baseColor}/>
                </View> :
                <GiftedChat
                    messages={messages}
                    user={{
                        _id: auth.currentUser.email,
                        avatar: 'https://i.pravatar.cc/300'
                    }}
                    onSend={messages => onSend(messages)}
                    renderBubble={props => {
                        return (
                            <Bubble
                                {...props}
                                wrapperStyle={{
                                    left: {
                                        elevation: 2,
                                        padding: 5,
                                        backgroundColor: '#333'
                                    },
                                    right: {
                                        backgroundColor: baseColor,
                                        elevation: 2,
                                        padding: 5
                                    }
                                }}
                                textStyle={{
                                    left: {
                                        color: '#fff'
                                    },
                                    right: {

                                    }
                                }}
                            />
                        );
                    }}

                    renderComposer={props => {
                        return (
                            <Composer
                                {...props}
                                placeholder="Digite sua mensagem..."
                                textInputStyle={{
                                    color: 'black',
                                }}
                            />
                        );
                    }}
                />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: '5%',
        color: '#fff'
    },
    header: {
        backgroundColor: baseColor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    typingBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: 'transparent',
        elevation: 1
    },
});
