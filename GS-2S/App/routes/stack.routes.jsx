import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Auth from '../screens/auth/page';
import New from '../screens/new/page';
import NewEndereco from '../screens/new/endereco/Page';

export default function StackRoutes() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        initialRouteName='login'
            screenOptions={{
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen
                name='login'
                component={Auth}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='cadastro'
                component={New}
                options={{
                    headerTitle: 'Dados pessoais'
                }}
            />

            <Stack.Screen
                name='endereco'
                component={NewEndereco}
                options={{
                    headerTitle: 'Localização'
                }}
            />

        </Stack.Navigator>
    )
}
