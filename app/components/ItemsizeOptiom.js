import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('screen')



export default (props) => (
    <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
    >
        <Text style={styles.textSize} >{props.size}</Text>
        <Text style={styles.textAmount} >{props.amount} Itens</Text>
        <Text style={styles.priceText} >{props.price}</Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        elevation: 3,
        borderColor: '#d3d3d3',
        width: width/3,
        height: height/6,
        backgroundColor: '#f1be13',
        borderRadius: 20,
        margin: 20
    },
    textSize: {
        fontSize: 17,   
        fontFamily: 'Roboto',
        color: '#fff'
    },
    textAmount: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#fff'
    },
    priceText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#fff'
    }
})