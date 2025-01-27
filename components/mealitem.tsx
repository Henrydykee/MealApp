import Meal from "models/meal";
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";

function MealItem({ item , onPress} : { item: Meal , onPress: any}) {

    const i = item;
    return <View style={styles.mealItem}>
        <Pressable
            style={({ pressed }) => pressed ? styles.buttonPressed : null}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.imageStyle} source={{ uri: i.imageUrl }} />
                </View>
                <Text style={styles.title}> {i.title}</Text>
                <View style={styles.details}>
                    <Text style={styles.detailItem}> {i.duration}mins</Text>
                    <Text style={styles.detailItem} >{i.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem} >{i.affordability.toUpperCase()}</Text>
                </View>
            </View>



        </Pressable>

    </View>

}

export default MealItem;

const styles = StyleSheet.create({

    mealItem: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : "visible",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },

    innerContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: "hidden"
    },


    buttonPressed: {
        opacity: 0.5,
    },

    imageStyle: {
        width: '100%',
        height: 200
    },

    details: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
        padding: 8
    },

    detailItem: {
        marginHorizontal: 4,

        fontSize: 12,

    }

})

