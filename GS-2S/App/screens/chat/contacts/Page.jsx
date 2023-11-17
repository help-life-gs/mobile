import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseColor } from "../../../utils/CONSTRAINTS";
import ContactList from "../components/contactList/Page";

export default function Contacts({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Conversas</Text>
            </View>
            <View style={styles.contatos}>
                <ContactList/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : baseColor,
        width : '100%',
        height : '12%',
        alignItems : 'center',
        padding : '5%',
        elevation : 5
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing : 2,
        color : '#fff',
        fontStyle : 'italic'
    },
    contatos : {
        width : '100%'
    }
})