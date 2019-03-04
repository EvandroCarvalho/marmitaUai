import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent';
import ConfirmItemsSelect from '../components/confirmItemsSelect'
import  GridOfItems from '../components/gridOfItems'
import defaultThemes from '../styles/defaultThemes';
import {setDrinksOnObjectSeleted} from '../actions/appServicesActions'

class DrinksItems extends Component {

/*     static navigationOptions = ({navigation}) => {
        const { params } = navigation.state;
        console.log(params.title)
        return {
        title: `${params.title}`
        }
    }
 */
static navigationOptions = {
    header: null
}
    state = {
        items: [
            {id: '1', nome: 'Coca-Cola'},
            {id: '2', nome: 'Mineiro'},
            {id: '3', nome: 'Fanta Laranja'},
            {id: '4', nome: 'Água Mineral'},
        ],
        countItems: 2,
        itemSeletect: [],
    }


    renderList = ({item}) => {
        if(item.empty) {
            return <View style={[styles.buttomOptions, styles.itemEmpty]} />
        }
        return (
            <FoodItemComponent
            item={item}
            onPress={(active) => {
                this.addItemSelectedInList(active, item)
            }}
            disabled={false}
            />
        )
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
        this.props.navigation.addListener('willBlur', () => this.props.setDrinksOnObjectSeleted(this.state.itemSeletect))
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Text style={styles.descriptionText}>{`Bebidas`}</Text>
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

export default connect(mapStateToProps, {setDrinksOnObjectSeleted})(DrinksItems)