import Mealdeatails from "components/mealdetails";
import MealItem from "components/mealitem";
import Meal from "models/meal";
import { View, Text, Image, StyleSheet } from "react-native";



function DetailScreen({ route, navigation }: { route: any, navigation: any }) {
    const m: Meal = route.params.meal;

    return (
        <View>

            <Image style={styles.imageStyle} source={{ uri: m.imageUrl }} />
            <Text>{m.title}</Text>
            <Mealdeatails m={m} />

            <Text>Ingredients</Text>
            {m.ingredients.map( i => 
                <Text key={i}>-{i}</Text>
            )}
            <Text>Steps</Text>
            {m.steps.map( i => 
                <Text key={i}>-{i}</Text>
            )}

        </View>
    )

}

export default DetailScreen;


const styles = StyleSheet.create({

    details: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    imageStyle: {
        width: '100%',
        height: 200
    },

});