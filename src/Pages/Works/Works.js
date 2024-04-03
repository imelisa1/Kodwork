import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import useFetch from "../../Hooks/useFetch";
import WorkCard from "../../Components/WorkCard/WorkCard";

const Works = ({navigation}) => {
    
    const url = "https://www.themuse.com/api/public/jobs?page=3";

    const {data, loading, error} = useFetch(url);

    const handleOnSearch = (id) => {
      navigation.navigate("Details", {workId: id});
      console.log(id);
    }

    if (loading) {
        return <ActivityIndicator size="large"/> ;
    }

    if (error) {
        return <Text> {error} </Text>
    }
    return(
        <View>
            <FlatList 
                data={data.results}  // veriler results altında tutulduğundan ona bağlıyoruz.
                renderItem={({ item }) => <WorkCard work={item} onSearch={() => handleOnSearch(item.id)}/>}
                keyExtractor={(item) => item.id.toString()} //keyExtractor fonksiyonunda item.id değeri 
                  // stringe çevrildi çünkü FlatList bu değeri string olarak bekler.
                />
              </View>
            );
}

export default Works;