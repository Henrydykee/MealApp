import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "data/dummy-data";
import Meal from "models/meal";
import MealItem from "components/mealitem";




function renderMealItem(item : {item :Meal}) {
    return <MealItem item={item.item}  />

}




function MealsOverviewScreen({ route }: { route: any }) {

    const categoryId = route.params.categoryId["id"];

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={style.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem }
            />


        </View>
    );
}

export default MealsOverviewScreen;



const style = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16
    }
})