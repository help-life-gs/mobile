import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import { useAuth } from '../context/AuthContext';

export default function Routes() {

    const { isAuth } = useAuth();

    return (
        <NavigationContainer>
            {isAuth ? <TabRoutes /> : <StackRoutes/>}
        </NavigationContainer>
    )
}