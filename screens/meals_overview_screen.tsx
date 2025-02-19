import { Text, View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "data/dummy-data";
import Meal from "models/meal";
import MealItem from "components/mealitem";
import MealsList from "components/mealList";

function MealsOverviewScreen({ route, navigation }: { route: any, navigation: any }) {

    function renderMealItem(item: { item: Meal }) {


        function onPress() {
            navigation.navigate('DetailScreen', { meal: item.item });
        }

        return <MealItem item={item.item} onPress={onPress} />

    }

    const categoryId = route.params.category["id"];
   // const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.category["title"],

        })
    }, [categoryId, navigation])




    return (
        <MealsList navigation={navigation} categoryId={categoryId} />
    );
}

export default MealsOverviewScreen;



const style = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16
    }
})