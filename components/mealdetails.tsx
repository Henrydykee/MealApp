import { StyleSheet, Text, View } from "react-native";
import Meal from "models/meal";

function Mealdeatails({m , style , textStyle} : any) {
    const meal: Meal = m;
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}> {meal.duration}mins</Text>
            <Text style={[styles.detailItem, textStyle]} >{meal.complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]} >{meal.affordability.toUpperCase()}</Text>
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