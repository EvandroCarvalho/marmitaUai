import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent';
import ConfirmItemsSelect from '../components/confirmItemsSelect'
import  GridOfItems from '../components/gridOfItems'
import defaultThemes from '../styles/defaultThemes'
import { setSaladsOnObjectSelected } from '../actions/appServicesActions'

class Salads extends Component {


static navigationOptions = {
    header: null
}
    state = {
        items: [
            {id: '1', nome: 'Tomate'},
            {id: '2', nome: 'Alface'},
            {id: '3', nome: 'Rucula'},
            {id: '4', nome: 'Brocolis'},
        ],
        countItems: 0,
        itemSeletect: [],
        showInformation: true
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
            disabled={false}
            />
        )
    }

 

    countNumberOfItems = (active) => {
        if(this.state.countItems >= 2 && this.state.showInformation) {
            Alert.alert(
                '',
                "Tudo bem em adicionar mais salada! Mas será cobrado o valor de x por adicional ok!? ;)",
                [
                    {text: 'OK', onPress: () => false}
                ],
                {cancelable:true}
                ),
                this.setState({showInformation: false})
                this.setState({countItems: this.state.countItems - 1})
            }
        else if(active){
            this.setState({
                countItems: this.state.countItems + 1
            })
            this.state.showInformation && this.state.countItems >= 1 ? this.props.navigation.navigate('DrinksItems') : ''
        }else {
            this.setState({countItems: this.state.countItems - 1})
        }
    }

    addItemSelectedInList = (active, item) => {
        if(active) {
            this.setState( prevState => {
                prevState.itemSeletect.push(item)
            })
        } else {
            this.setState( prevState => {
                let index = prevState.itemSeletect.indexOf(item)
                prevState.itemSeletect.splice(index, 1)
            })
        }
    }

    render() {
     //   console.log(this.props.itemsSelected)
        this.props.navigation.addListener('willBlur', () => this.props.setSaladsOnObjectSelected(this.state.itemSeletect))
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Text style={styles.descriptionText}>{`Escolha 2 opções de saladas`}</Text>
                <View style={{flex: 1, backgroundColor: defaultThemes.colors.withe}}>
                    <GridOfItems
                        items={this.state.items}
                        numColumns={3}
                        renderItem={this.renderList}
                        keyExtractor={items => items.id}
                    />
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        selectedRestaurant: state.restaurantsReducer.selectedRestaurant,
        sizeSelected: state.restaurantsReducer.sizeSelected,
        itemsSelected: state.restaurantsReducer.itemsSelected
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

export default connect(mapStateToProps, {setSaladsOnObjectSelected})(Salads)