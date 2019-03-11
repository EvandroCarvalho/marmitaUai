import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import  ItemSizeOptiom from '../components/ItemSizeOptiom'
import { connect } from 'react-redux'
import  { setSizeChosen } from '../actions/appServicesActions'
import {StackActions} from 'react-navigation'

class LunchSize extends Component {


    state = {
        sizes: [
            {
                size: 'Média',
                numberOfItems: 5,
                price: 7.00
            },
            {
                size: 'Grande',
                numberOfItems: 7,
                price: 10.00
            }

        ]
    }

    getSizeItem = (item, key) => (
        <ItemSizeOptiom
            key={key}
            size={item.size}
            amount={item.numberOfItems}
            price={item.price}
            onPress={ () => this.props.setSizeChosen(item, this.props) }
        />
    )

    render() {
        this.props.navigation.addListener('willFocus', () => BackHandler.addEventListener('hardwareBackPress', 
            () => this.props.navigation.dispatch(StackActions.pop({n:1}))))
        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontFamily:'Roboto', fontSize: 18}}>Escolha uma opção de tamanho</Text>
                <View style={styles.container}>
                    {this.state.sizes.map(
                        this.getSizeItem
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})

mapStateToProps = (state) => (
    {
        selectedRestaurant: state.appServiceReducer.selectedRestaurant
    }
)

export default connect(mapStateToProps, { setSizeChosen } )(LunchSize)
