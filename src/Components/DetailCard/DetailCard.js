import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import * as cheerio from 'cheerio';

const DetailCard = ({work, onFav}) => {

    const $ = cheerio.load(work.contents); // çevirmek istediğimiz dökümanı load fonksiyonu ile gönderiyoruz.

    return(
        <ScrollView>
            <Text style={styles.title}> {work.name} </Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}> Location :  </Text>
                <Text style={styles.locationData}> {work.locations.map((location) => location.name).join(', ')} </Text>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.location}> Job Level :  </Text>
                <Text style={styles.locationData}> {work.levels.map((level) => level.name).join(', ')}  </Text>
            </View>
            <Text style={styles.titleDetail}> Job Detail </Text>
            <View style={styles.devider}/>
            <View>
               <Text style={styles.content}> {$(work.contents).text()} </Text> 
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={null}>
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onFav}>
                    <Text style={styles.buttonText}> Add Favorites </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailCard;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginHorizontal: 5,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    locationContainer: {
        flexDirection: 'row',
    },
    location: {
        fontWeight: '700',
        fontSize: 15,
        marginHorizontal: 5,
        color: '#D04848'
    },
    locationData: {
        fontWeight: '500',
        fontSize: 15,
        color: 'black'
    },
    devider: {
        borderBottomWidth: 1,
        marginVertical: 15,
        borderColor: 'gray',
    },
    titleDetail: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: "700",
        color: 'black',
        marginTop: 15,
    },
    content: {
        marginHorizontal: 15,
        marginVertical: 15,
        color: 'black',
        fontWeight: '400'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#D04848',
        minWidth: 150,
        borderRadius: 15,
        marginVertical: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignSelf: 'center',
        
    }
})