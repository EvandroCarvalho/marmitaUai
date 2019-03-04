import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, Alert } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent'
import ConfirmItemsSelect from '../components/confirmItemsSelect'
import  GridOfItems from '../components/gridOfItems'
import defaultThemes from '../styles/defaultThemes'
import { setMeatsOnObjectItemsSelected, cleanItemsSelected } from '../actions/appServicesActions'

class Meats extends Component {


    state = {
        items: [
            {id: '1', nome: 'Bife de vaca'},
            {id: '2', nome: 'Bife de franco'},
            {id: '3', nome: 'Frango'},
            {id: '4', nome: 'Bife suíno'},
        ],
        countItems: 0,
        itemSeletect: [],
        showInformation: true,
        animetedScreen: new Animated.ValueXY(0,0)
    }

    componentWillMount = () => {
        this.props.cleanItemsSelected()
        Animated.timing(this.state.animetedScreen, {
            toValue: {
                x: -100,
                y: 0
            },
            duration: 1000,
            delay: 1000
        }).start()
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
        if(this.state.countItems >= 1 && this.state.showInformation) {
            Alert.alert(
                '',
                "Tudo bem em adicionar mais proteína! Mas será cobrado o valor de x por adicional ok!? ;)",
                [
                    {text: 'OK', onPress: () => false}
                ],
                {cancelable:true}
                ),
            this.setState({showInformation: false})
        }
        else if(active){
            this.setState({
                countItems: this.state.countItems + 1
            })
            this.state.showInformation ? this.props.navigation.navigate('FoodsItems') : ''
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
        this.props.navigation.addListener('willBlur', () => this.props.setMeatsOnObjectItemsSelected(this.state.itemSeletect))
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Text style={styles.descriptionText}>{`Escolha 1 proteina`}</Text>
                <View style={{flex: 1,backgroundColor: defaultThemes.colors.withe}}>
                    <GridOfItems
                        items={this.state.items}
                        numColumns={2}
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

export default connect(mapStateToProps, {setMeatsOnObjectItemsSelected, cleanItemsSelected})(Meats)