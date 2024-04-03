import React from "react";
import { View, Text, ActivityIndicator, Alert} from "react-native";
import useFetch from "../../Hooks/useFetch";
import DetailCard from "../../Components/DetailCard";
import{useDispatch,useSelector} from "react-redux"

const Detail = ({route}) => {

    const id = route.params.workId;

    const url = "https://www.themuse.com/api/public/jobs/" + id;

    const {data, loading, error} = useFetch(url);

    const dispatch=useDispatch();

    const list = useSelector(s=>s.jobs)
    

    const handleOnFav = (id) => {
        dispatch({type: 'ADD_FAVORITE', payload: {
            id:data.id, name: data.name, locations: data.locations, levels: data.levels, company: data.company, publication_date: data.publication_date}});
        Alert.alert('Succesfully Added!' , (data.name) + ' is added your Favorites List.' )
    }


    if (loading) {
        return <ActivityIndicator size="large"/> ;
    }

    if (error) {
        return <Text> {error} </Text>
    }

    return(
        <View>
            <DetailCard work={data} onFav={handleOnFav}/>
        </View>
    )
}

  export default Detail;