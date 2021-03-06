import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent'
import  GridOfItems from '../components/gridOfItems'
import defaultThemes from '../styles/defaultThemes'
import { setComplementsOnObjectSelected } from '../actions/appServicesActions'


class FoodsItems extends Component {

    state = {
        items: [
            {id: '1', nome: 'arroz'},
            {id: '2', nome: 'feijao'},
            {id: '3', nome: 'macarrão'},
            {id: '4', nome: 'ovo'},
            {id: '5', nome: 'milho'},
            {id: '6', nome: 'batata doce'},
            {id: '7', nome: 'ovos de codorna'},
            {id: '8' ,nome: 'lasanha'},
        ],
        countItems: this.props.sizeSelected.numberOfItems,
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

    countNumberOfItems = async (active) => {
        if(active){
            await this.setState({
                countItems: this.state.countItems - 1
            })
        } 
        if(!active) {
            await this.setState({countItems: this.state.countItems + 1})
        } 
        if(this.state.countItems < 0 && this.state.showInformation) {
            Alert.alert(
                '',
                "Tudo bem em adicionar mais complemento! Mas será cobrado o valor de x por adicional ok!? ;)",
                [
                    {text: 'OK', onPress: () => false}
                ],
                {cancelable:true}
                ),
                await this.setState({showInformation: false})
        } else {
            this.state.showInformation && this.state.countItems < 1 ? await this.props.navigation.navigate('SaladsItems') : ''
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
        this.props.navigation.addListener('willBlur', () => this.props.setComplementOnObjectSeleteds(this.state.itemSeletect))
        console.log(this.props.itemsSelected)
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Text style={styles.descriptionText}>
                    {`Escolha ${this.state.countItems > 0 ? this.state.countItems : 0} ${this.state.countItems > 1 ? 'opções' : 'opção'}`}
                </Text>
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
        selectedRestaurant: state.appServiceReducer.selectedRestaurant,
        sizeSelected: state.appServiceReducer.sizeSelected,
        itemsSelected: state.appServiceReducer.itemsSelected
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

export default connect(mapStateToProps, {setComplementOnObjectSeleteds: setComplementsOnObjectSelected})(FoodsItems)