import { StyleSheet, Text, View } from "react-native";
import Meal from "models/meal";

function Mealdeatails({m} : any) {
    const meal: Meal = m;
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}> {meal.duration}mins</Text>
            <Text style={styles.detailItem} >{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem} >{meal.affordability.toUpperCase()}</Text>
        </View>
    )
}

export default Mealdeatails;




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
    }

});