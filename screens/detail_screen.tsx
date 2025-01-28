import Mealdeatails from "components/mealdetails";
import Meal from "models/meal";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";



function DetailScreen({ route, navigation }: { route: any, navigation: any }) {
    const m: Meal = route.params.meal;


    //using componets on titlebar withing a screen
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>{
                return <Button title="Tap me" onPress={()=> console.log("jjj")}/>
            }
        });
    } , [navigation ,]);

    return (

        <ScrollView style={{ marginBottom: 30 }}>
            <View>

                <Image style={styles.imageStyle} source={{ uri: m.imageUrl }} />
                <Text style={styles.title}>{m.title}</Text>
                <Mealdeatails m={m} textStyle={styles.detailTextStyle} />

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subTitle} >Ingredients</Text>
                </View>


                {m.ingredients.map(i => (
                    <View style={styles.listItem} key={i}>
                        <Text style={styles.itemText}>- {i}</Text>
                    </View>
                ))}



                <View style={styles.subtitleContainer}>
                    <Text style={styles.subTitle} >Steps</Text>
                </View>


                {m.steps.map(i => (
                    <View style={styles.listItem} key={i}>
                        <Text style={styles.itemText}>- {i}</Text>
                    </View>
                ))}



            </View>

        </ScrollView>

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
        height: 350
    },

    detailTextStyle: {
        color: 'white'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    subTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',


        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,

    },

    subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
    },

    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    },


});