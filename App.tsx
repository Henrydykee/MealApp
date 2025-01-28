import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View , Button} from 'react-native';
import CategoryScreen from './screens/category_screen'; // Fixed typo in import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from 'screens/meals_overview_screen';
import DetailScreen from 'screens/detail_screen';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/favorite_screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




function DrawerNavigation(){
  return <Drawer.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#24180f' },
    headerTintColor: 'white',
    sceneStyle: { backgroundColor: '#24180f' },
  }}
  >
    <Drawer.Screen name='Categories' component={CategoryScreen}  />
    <Drawer.Screen name='Favorites' component={FavoritesScreen} />
  </Drawer.Navigator>
}


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
              component={DrawerNavigation}
              options={{ title: 'Meal Categories' , headerShown: false}}

            />
            <Stack.Screen name='MealsOverviewScreen' component={MealsOverviewScreen}
        
          />
            <Stack.Screen name='DetailScreen' component={DetailScreen}  />

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
