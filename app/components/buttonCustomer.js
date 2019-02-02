import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtomCustomer = (props) => (
  <TouchableOpacity
    style={styles.buttom}
    onPress={props.onPress}
  >
    <Text>{props.text}</Text>
  </TouchableOpacity>
)

export default ButtomCustomer

const styles = StyleSheet.create({
  buttom: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    elevation: 3,
    borderBottomColor: '#007f3f',
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: '#007f3f',
    borderRightColor: '#007f3f'
    }
})