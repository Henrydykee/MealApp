import { MEALS } from "data/dummy-data";
import Meal from "models/meal";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./mealitem";
import { useNavigation } from '@react-navigation/native';

function MealsList({ navigation,  categoryId }: { navigation : any , categoryId: string }) {

    // const navigation = useNavigation();

    function renderMealItem(item: { item: Meal }) {
        function onPress() {
           navigation.navigate('DetailScreen', { meal: item.item });
        }
        return <MealItem item={item.item} onPress={onPress} />
    }


    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />


        </View>
    );

}

export default MealsList;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16
    }

})