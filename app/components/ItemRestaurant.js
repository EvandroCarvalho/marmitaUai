import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ItemResutaurant = (props) => (
    <TouchableOpacity
        style={styles.list}
    >   
        <View style={styles.imageName}>
            <Image
                style={{ width: 60, height: 60, borderRadius: 20, borderWidth: 1, marginRight: 15, backgroundColor: '#d3d3d3' }}
                />
                <Text style={{fontSize: 18, color: '#1d6346'}}>{props.restaurantName}</Text>   
        </View>
        <View style={styles.description}>
            <View style={styles.descriptionItens}>
                <Text style={styles.fontTitle}>Distância</Text>
                <Text style={styles.fonts}>{props.distance} km</Text>   
            </View>
            <View style={styles.descriptionItens}>
                <Text style={styles.fontTitle}>status</Text>
                <Text style={styles.fonts}>Aberto</Text>   
            </View>
            <View style={styles.descriptionItens}>
                <Text style={styles.fontTitle}>Avaliação</Text>
                <Text style={styles.fonts}>5 Stars</Text>   
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff'
    },
    imageName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionItens: {
        flexDirection: 'column',
        margin: 10
    },
    fonts: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color:'#000',
        fontWeight: 'bold'
    },
    fontTitle: {
        fontSize: 12,
        fontFamily: 'Roboto'
    }
})

export default ItemResutaurant