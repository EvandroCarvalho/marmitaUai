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
    />
)