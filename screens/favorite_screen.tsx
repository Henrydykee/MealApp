import MealItem from "components/mealitem";
import { MEALS } from "data/dummy-data";
import Meal from "models/meal";
import { useContext } from "react";
import { Text, View, StyleSheet ,FlatList } from "react-native";
import { FavouriteContext } from "store/context/favourite";
import { useNavigation } from '@react-navigation/native';

function FavoriteScreen({ route,  }: { route: any }) {

   const navigation = useNavigation();

  const favoriteMealCtx = useContext(FavouriteContext);
  const favoriteMeals = favoriteMealCtx.id.map((id) => MEALS.find((meal) => meal.id === id)).filter((meal): meal is Meal => meal !== undefined); 

 

  function renderMealItem(itemData: { item:  Meal }) {
    const item = itemData.item;

    const handlePress = () => {
     // navigation.navigate('DetailScreen', { mealId: itemData.item.id });
    };

    return <MealItem item={item} onPress={handlePress} />;
  }
  

  return (
      <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(favoriteMeals) => favoriteMeals.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});