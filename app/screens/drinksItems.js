import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent';
import  GridOfItems from '../components/gridOfItems'
import defaultThemes from '../styles/defaultThemes';
import {setDrinksOnObjectSeleted} from '../actions/appServicesActions'
import ButtonCustomer from '../components/buttonCustomer';

class DrinksItems extends Component {

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
        modalvisible: false
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

    setRouter = ({userAuthentication, navigation}) => {
        if(userAuthentication.isAutheticated) {
            navigation.navigate('confirm')
        } else {
            navigation.navigate('login')
        }
    }

    render() {
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10, opacity: this.state.modalvisible ? 0.2 : 1}}>
                <Text style={styles.descriptionText}>{`Bebidas`}</Text>
                <View style={{flex: 1, backgroundColor: defaultThemes.colors.withe}}>
                    <GridOfItems
                        items={this.state.items}
                        numColumns={3}
                        renderItem={this.renderList}
                        keyExtractor={items => items.id}
                    />
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                        <ButtonCustomer
                            style={styles.submitButton}
                            text={'Pronto!'}
                            disabled={true}
                            onPress={()=> {
                                this.props.setDrinksOnObjectSeleted(this.state.itemSeletect),
                                this.props.itemsSelected.selected ? this.setRouter(this.props) :
                                    alert('Nehum item foi selecionado!')
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        selectedRestaurant: state.appServiceReducer.selectedRestaurant,
        sizeSelected: state.appServiceReducer.sizeSelected,
        itemsSelected: state.appServiceReducer.itemsSelected,
        userAuthentication: state.appServiceReducer.userAuthentication
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
    },
    submitButton: {
        backgroundColor: defaultThemes.colors.withe,
        width: 150,
        borderColor: defaultThemes.colors.yellowTheme,
        borderBottomColor: defaultThemes.colors.yellowTheme
    }
})

export default connect(mapStateToProps, {setDrinksOnObjectSeleted})(DrinksItems)