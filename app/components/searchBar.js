import React from 'react'
import {View, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default () => (
    <View style={styles.searchStyle}>
        <TextInput
            style={{width:'90%', fontSize: 18, fontFamily:'Roboto'}}
            onChangeText={() => false}
        />
        <View style={{flex: 1, justifyContent:'center', alignItems:'flex-end'}}>
            <TouchableOpacity   
            >
                <Image
                    style={{width:40, height: 40, marginRight: 5}}
                    source={require('../assets/images/search-flat.png')}
                />
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    searchStyle: {
        flexDirection: 'row',
        borderColor: '#d3d3d3',
        borderWidth: 0.5,
        elevation: 2,
        backgroundColor:'#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
    }
})