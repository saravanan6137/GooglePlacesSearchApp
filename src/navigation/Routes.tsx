import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './TabNavigator';

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
    );
};
