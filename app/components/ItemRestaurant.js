import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ItemResutaurant = (props) => (
    <TouchableOpacity
        style={styles.list}
    >
        <Image
            style={{ width: 60, height: 60, borderRadius: 20, borderWidth: 1, marginRight: 15, backgroundColor: '#000' }}
            />
        <View style={styles.description}>
            <Text style={styles.fonts}>{props.restaurantName}</Text>
            <Text style={styles.fonts}>Distancia: {props.distance} km</Text>   
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#d3d3d3',
        margin: 10,
        padding: 10
    },
    description: {
        flexDirection: 'column',
        padding: 15
    },
    fonts: {
        fontSize: 18,
        fontFamily: 'Roboto'
    }
})

export default ItemResutaurant