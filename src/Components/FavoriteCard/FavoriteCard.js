import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const FavoriteCard = ({job, onDelete, goDetail}) => {

    return (
       <TouchableOpacity onPress={goDetail}>
        <View style={styles.container}>
            <Text style={styles.title}> {job.name} </Text>
            <Text style={styles.company}> {job.company.name} </Text>
            <Text style={styles.locations}> {job.locations[0].name} </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text style={styles.buttonText}> X </Text>
            </TouchableOpacity> 
        </View>
       </TouchableOpacity>
      
    )
}

export default FavoriteCard;

export const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black'
    },
    title: {
        fontSize: 18,
        marginHorizontal: 5,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'black',},
    company: {
        fontWeight: '700',
        fontSize: 15,
        marginHorizontal: 5,
        color: '#D04848'
    },
    locations: {
        fontWeight: '700',
        fontSize: 15,
        marginHorizontal: 5,
        color: 'black'
    },
    deleteButton:{
        backgroundColor: '#D04848',
        minWidth: 150,
        borderRadius: 15,
        marginVertical: 15
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignSelf: 'center',
    }
})