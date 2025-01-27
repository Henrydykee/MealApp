import { Pressable, Text, View, StyleSheet, Platform } from "react-native";


function CategoryGridTile({ title, color }: { title: string, color: string }) {

    return <View style={styles.gridItem}>
        <Pressable style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}>
            <View style={[styles.innerContainer ,{ backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </Pressable>
    </View >

}

export default CategoryGridTile;


const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : "visible"
    },

    buttonStyle: {
        flex: 1

    },

    buttonPressed: {
        opacity: 0.5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }

})