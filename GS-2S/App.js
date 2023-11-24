import Routes from './App/routes';
import { AuthProvider } from './App/context/AuthContext';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Acesso a localização negada!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    
      try {
        const stringLocation = JSON.stringify(location);
        await AsyncStorage.setItem('location', stringLocation);
      }
      catch(err) {
        Alert.alert(errorMsg);
      }
    })();

  }, []);



  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}