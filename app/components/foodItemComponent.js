import React from 'react'
import {TouchableOpacity, Text, StyleSheet } from 'react-native'

class FoodItemComponent extends React.PureComponent {

    state = {
        activeButtom: false
    }

    render() {
        return (
            <TouchableOpacity style={[styles.buttomOptions, {backgroundColor: this.state.activeButtom ? "#f1be13" : '#fff'}]}
                disabled={this.props.disabled}
                onPress={ () => {
                    this.setState({
                        activeButtom: !this.state.activeButtom
                    })
                    this.props.onPress(this.state.activeButtom)
                } }
            >
                <Text style={[styles.textStyle, {color: this.state.activeButtom ? '#fff': '#64666a'}]}>{this.props.item.nome}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    buttomOptions: {
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        elevation: 3,
        borderColor: '#d3d3d3',
        padding: 20,
        borderRadius: 10,
        margin: 5,
        flexGrow: 1,
        flexBasis: 0
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
    }
})


export default FoodItemComponent