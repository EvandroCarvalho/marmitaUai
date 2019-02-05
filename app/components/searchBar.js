import React from 'react'
import {View, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default () => (
    <View style={styles.searchStyle}>
    <TextInput
        style={{width:'90%'}}
        onChangeText={() => false}
    />
    <View style={{flex: 1, justifyContent:'center', alignItems:'flex-end', marginRight: 10}}>
        <TouchableOpacity   
        >
            <Image
                style={{width:40, height: 40}}
                source={require('../assets/images/search-flat.png')}
            />
        </TouchableOpacity>
    </View>
</View>
)

const styles = StyleSheet.create({
    searchStyle: {
        width: width,
        flexDirection: 'row',
        borderColor: '#d3d3d3',
        borderWidth: 2,
        elevation: 3,
        backgroundColor:'#fcf4e6',
      //  borderRadius: 20,
        paddingLeft: 10
    }
})