import React from 'react'
import { TextInput, StyleSheet } from 'react-native'


export default inputTextComponent = (props) => (
    <TextInput
     multiline={true}
     style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', margin: 10, padding:10}}
     placeholder={props.placeholder}
     onChangeText={props.onChangeText} 
     value={props.value}
     keyboardType={props.keyboardType || 'default'}
     onEndEditing={props.onEndEditing}
     onBlur={props.onBlur}
     maxLength={props.maxLength}
     multiline={props.multiline}
     onSubmitEditing={props.onSubmitEditing}
     keyboardType={props.keyboardType}
     style={[styles.inputStyle, [props.style]]}
    />
)

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d3d3d3',
        marginBottom: 10,
        fontFamily: 'Roboto'
    }
})

