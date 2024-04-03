import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WorkCard = ({work , onSearch}) => {
    return(
        <TouchableOpacity onPress={onSearch}>
            <View style={styles.container}>
                <Text style={styles.title}>{work.name}</Text>
                <Text style={styles.categories}>{work.categories.map((category) => category.name).join(', ')}</Text>
                {/* Yukarıdaki kodda, work.categories dizisi üzerinde map fonksiyonu kullanarak her bir kategori öğesinin "name" 
                özelliğine erişiyoruz. Ardından join fonksiyonuyla kategori adlarını virgülle ayırarak birleştiriyoruz. 
                Bu sayede ekranda iş ilanının kategori adlarını doğru şekilde gösterebiliriz */}
                <Text style={styles.place}>{work.locations.map((location) => location.name).join(', ')}</Text>
                <Text style={styles.level}>{work.levels.map((level) => level.name).join(', ')}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default WorkCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 12,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        margin: 5,
    },
    categories: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginBottom: 5,
        marginHorizontal: 5,
    },
    place: {
        marginHorizontal: 5,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize:16,
        backgroundColor: '#D04848',
        borderRadius: 20,
        padding: 5,
        color: 'white',
        maxWidth: 170
    },
    level: {
        alignSelf: 'flex-end',
        marginHorizontal: 8,
        marginBottom: 15,
        color: '#D04848',
        fontSize: 16,
        fontWeight: '700'
    },

})