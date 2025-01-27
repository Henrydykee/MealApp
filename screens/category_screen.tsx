import { View, FlatList, GestureResponderEvent } from "react-native";
import { CATEGORIES } from "data/dummy-data";
import Category from "models/category";
import CategoryGridTile from "components/categoryGridTile";
import { ListRenderItemInfo } from "react-native";


function CatgoryScreen({ navigation }: { navigation: any }) {


    function renderCategoryItem({ item }: ListRenderItemInfo<Category>) {
        return <CategoryGridTile title={item.title} color={item.color} onPress={function (event: GestureResponderEvent): void {
            pressHandler();

        }} />

        function pressHandler() {
            navigation.navigate('MealsOverviewScreen', {
                categoryId: item
            });
        }
    }



    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    );

}

export default CatgoryScreen;