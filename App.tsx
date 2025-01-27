import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CategoryScreen from './screens/category_screen'; // Fixed typo in import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from 'screens/meals_overview_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#24180f' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoryScreen}
              options={{ title: 'Meal Categories' }}

            />
            <Stack.Screen name='MealsOverviewScreen' component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const categoryTitle: string = route.params.categoryId.title; 
              //   return { title: categoryTitle };
              // }}

            />

          </Stack.Navigator>
        </NavigationContainer>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
  safeArea: {
    flex: 1,
  }
});
