import Routes from './App/routes';
import { AuthProvider } from './App/context/AuthContext';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function App() {
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Acesso a localização negada!');
        Alert.alert(errorMsg);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();

  }, []);



  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}