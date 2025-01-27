import { Text , View , StyleSheet } from "react-native";
import { MEALS } from "data/dummy-data";


function MealsOverviewScreen() {
  return (
    <View>
      <Text style={style.container}>Meals Overview Screen</Text>
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