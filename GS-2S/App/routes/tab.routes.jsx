import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/profile/page';
import Triagem from '../screens/triagem/page';
import { Feather } from '@expo/vector-icons';
import History from '../screens/history/Page';
import Contacts from '../screens/chat/contacts/Page';
import StackRoutes from './stack.routes';
import Chat from '../screens/chat/Page';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator initialRouteName='Triagem' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#156669',
        }}>

            <Tab.Screen
                name='Triagem'
                component={Triagem}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='thermometer' color={color} size={size} />,
                    tabBarLabel: 'Triagem',
                }}
            />

            <Tab.Screen
                name='contacts'
                component={Contacts}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='message-circle' color={color} size={size} />,
                    tabBarLabel: 'Chat'
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
                    tabBarLabel: 'Perfil'
                }}
            />

            <Tab.Screen
                name='historico'
                component={History}
                options={{
                    tabBarButton: () => null
                }}
            />

            <Tab.Screen
                name='chat'
                component={Chat}
                options={{
                    tabBarButton: () => null
                }}
            />

            <Tab.Screen
                name='StackRoutes'
                component={StackRoutes}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Tab.Navigator>
    )
}