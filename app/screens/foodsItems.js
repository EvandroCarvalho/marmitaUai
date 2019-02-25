import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent';
import ConfirmItemsSelect from '../components/confirmItemsSelect'
import  GridOfItems from '../components/gridOfItems'
import { NavigationEvents } from 'react-navigation'
import defaultThemes from '../styles/defaultThemes';

class FoodsItems extends Component {

    state = {
        items: [
            {id: '1', nome: 'arroz'},
            {id: '2', nome: 'feijao'},
            {id: '3', nome: 'macarrão'},
            {id: '4', nome: 'carne'},
            {id: '5', nome: 'milho'},
            {id: '6', nome: 'batata doce'},
            {id: '7', nome: 'ovos de codorna'},
            {id: '8' ,nome: 'lasanha'},
        ],
        countItems: this.props.sizeSelected.numberOfItems,
        itemSeletect: new Set(),
        isVisible: false
    }


    renderList = ({item}) => {
        if(item.empty) {
            return <View style={[styles.buttomOptions, styles.itemEmpty]} />
        }
        return (
            <FoodItemComponent
            item={item}
            onPress={(active) => {
                this.countNumberOfItems(active)
                this.addItemSelectedInList(active, item)
            }}
            disabled={this.state.countItems <= 1 ? true : false}
            />
        )
    }

    countNumberOfItems = (active) => {
        if(this.state.countItems > 1){
            if(active){
                this.setState({
                        countItems: this.state.countItems + 1
                    })
            }else {
                this.setState({countItems: this.state.countItems - 1})
            }
        }
        if(this.state.countItems <= 1) {
            Alert.alert(
                '',
                "Gostaria de adicionar uma bebida?",
                [
                    {text: 'Sim', onPress: () => this.props.navigation.navigate('DrinksItems')},
                    {text: 'Não', onPress: () => this.props.navigation.navigate('PayMode')}
                ],
                {cancelable:false}
            )
       }
    }

    addItemSelectedInList = (active, item) => {
        if(!active) {
            this.setState( prevState => {
                prevState.itemSeletect.add(item)
            })
        } else {
            this.setState( prevState => {
                prevState.itemSeletect.delete(item)
            })
        }
    }

    
    render() {
        this.props.navigation.addListener('didFocus', () => console.log('carregou a tela'))
        this.props.navigation.addListener('didBlur', () => console.log('mudou de tela'))
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10, opacity: this.state.isVisible ? 0.1 : 1}}>
                <Text style={styles.descriptionText}>{`Escolha ${this.state.countItems} ${this.state.countItems > 1 ? 'opções' : 'opção'}`}</Text>
                <View style={{flex: 1, backgroundColor: defaultThemes.colors.withe}}>
                    <GridOfItems
                        items={this.state.items}
                        numColumns={3}
                        renderItem={this.renderList}
                        keyExtractor={items => items.id}
                    />
                    <ConfirmItemsSelect
                        visible={this.state.isVisible}
                        items={this.state.itemSeletect}
                    />
                </View>
                <View style={{margin: 10, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{alignItems:'flex-start', justifyContent: 'flex-end'}}>
                        <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                        >
                        <Image
                            style={{width: 40, height:40, transform:[{rotate: '180deg'}]}}
                            source={require('../assets/images/next.png')}
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'flex-end', justifyContent: 'flex-end'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Salads', {
                                active: true
                            })}
                        >
                        <Image
                            style={{width: 40, height:40}}
                            source={require('../assets/images/next.png')}
                        />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        selectedRestaurant: state.restaurantsReducer.selectedRestaurant,
        sizeSelected: state.restaurantsReducer.sizeSelected
    }
)

const styles = StyleSheet.create({
    buttomOptions: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#d3d3d3',
        padding: 20,
        borderWidth: 1,
        elevation: 2,
        margin: 5,
        flexGrow: 1,
        flexBasis: 0,
        height: 80,
    },
    itemEmpty: {
        backgroundColor: 'transparent',
        elevation: 0,
        borderWidth: 0
    },
    selected: {
        backgroundColor: '#fe1',
    },
    descriptionText: {
        textAlign: 'center',
        fontFamily:'Roboto',
        fontSize: 18,
        marginTop: 5,
        padding: 10,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, null)(FoodsItems)