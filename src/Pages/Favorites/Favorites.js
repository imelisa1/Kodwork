import React from "react";
import { View, FlatList, Alert } from "react-native";
import {useSelector,useDispatch} from "react-redux";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";


const Favorite = ({navigation}) => {

    const list = useSelector(s => s.jobs);
    const dispatch = useDispatch();
    const goDetail = id => {
        navigation.navigate('Details', {id});
    }
    const removeJobItems = item => {
        dispatch({type: 'REMOVE_FAVORITE', payload: item});
        Alert.alert("Remove Favorite!", "Successfuly deleted.");
      };
    
    return (
        <View>
            <FlatList data={list} renderItem={({item}) => <FavoriteCard job={item} onDelete={removeJobItems} goDetail={goDetail}/>} />
        </View>
    );
 }
export default Favorite;
