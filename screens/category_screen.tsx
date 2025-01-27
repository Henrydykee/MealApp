import { View, FlatList} from "react-native";
import { CATEGORIES } from "data/dummy-data";
import Category from "models/category";
import CategoryGridTile from "components/categoryGridTile";
import { ListRenderItemInfo } from "react-native";




function renderCategoryItem({ item }: ListRenderItemInfo<Category>){
    return <CategoryGridTile title={item.title} color={item.color}/>
}


function CatgoryScreen(){
    return (
        <View>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem= {renderCategoryItem}
                numColumns={2}
            />
        </View>
    );

}

export default CatgoryScreen;