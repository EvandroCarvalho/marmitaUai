import React from 'react'
import { View, ActivityIndicator, Modal, Text } from 'react-native'

export default (props) => (
  <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
    <Modal
      animationType='slide'
      visible={props.visible}
      transparent={true}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <ActivityIndicator
          accessible={props.loadIndicator}
          size={props.size || 'large'}
          color={props.color || "#e54"}
        />
      <Text style={{color: '#e54',fontSize: 20}}>{props.msg}</Text>
      </View>
    </Modal>
  </View>
)