import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HistoryList from './components/HistoryList/Page';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseColor } from '../../utils/CONSTRAINTS';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function History() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Histórico</Text>
        <TouchableOpacity>
          <Feather name='x' style={styles.icon} onPress={() => {navigation.navigate('Triagem')}} />
        </TouchableOpacity>
      </View>
      <HistoryList />
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
    letterSpacing: 2,
    color: '#fff',
    fontStyle: 'italic'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: baseColor,
    width: '100%',
    height: '12%',
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
});
