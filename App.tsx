import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/pages/Home';
import 'expo-dev-client';
import { RevenueCatProvider } from './app/providers/RevenueCatProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RevenueCatProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RevenueCat App" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RevenueCatProvider>
  );
}
