import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  ItemSizeOptiom from '../components/ItemsizeOptiom'
import { connect } from 'react-redux'

class LunchSize extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontFamily:'Roboto', fontSize: 18}}>Escolha uma opção de tamanho</Text>
                <View style={styles.container}>
                    <ItemSizeOptiom
                        size={'Média'}
                        amount={'5'}
                        price={'R$ 7,00'}
                        onPress={()=> { 
                            this.props.navigation.navigate('foodsItems', {
                                title: this.props.selectedRestaurant.nome
                            })
                        }}

                    />
                    <ItemSizeOptiom
                        size={'Grande'}
                        amount={'7'}
                        price={'R$ 10,00'}
                        onPress={()=> this.props.navigation.navigate('foodsItems')}
                    />
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
        selectedRestaurant: state.restaurantsReducer.selectedRestaurant
    }
)

export default connect(mapStateToProps, null )(LunchSize)
