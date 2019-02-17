import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class FoodsItems extends Component {

    
    static navigationOptions = ({navigation}) => {
        const { params } = navigation.state;
        return {
        title: `${params.title}`
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontFamily:'Roboto', fontSize: 18, marginTop: 5}}>Escolha 5 opções</Text>

            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        selectedRestaurant: state.restaurantsReducer.selectedRestaurant
    }
)

export default connect(mapStateToProps, null)(FoodsItems)