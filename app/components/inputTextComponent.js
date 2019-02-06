import React from 'react'
import { TextInput } from 'react-native'


export default inputTextComponent = (props) => (
    <TextInput
     multiline={true}
     style={{borderBottomWidth: 1, borderBottomColor: '#d3d3d3', margin: 10, padding:10}}
     placeholder={props.placeholder}
     onChangeText={props.onChangeText} 
     value={props.value}
     keyboardType={props.keyboardType || 'default'}
     onEndEditing={props.onEndEditing}
     maxLength={props.maxLength}
     multiline={props.multiline}
     onSubmitEditing={props.onSubmitEditing}
     keyboardType={props.keyboardType}
     style={{fontSize: props.fontSize,
        color: props.fontColor,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d3d3d3',
        marginBottom: 10,
        fontFamily: 'Roboto'
    }}
    />
)