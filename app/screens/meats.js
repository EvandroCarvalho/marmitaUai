import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import FoodItemComponent from '../components/foodItemComponent';
import ConfirmItemsSelect from '../components/confirmItemsSelect'
import  GridOfItems from '../components/gridOfItems'
import { NavigationEvents } from 'react-navigation'
import defaultThemes from '../styles/defaultThemes';

class Meats extends Component {

/*   static navigationOptions = ({navigation}) => {
      
      return{
            tabBarLabel: <View style={{backgroundColor:'#0e0', padding: 20}}>
            <Image
            style={{width: 40, height:40}}
            source={require('../assets/images/steak.png')}
        />
            </View>
      }
    } */
    state = {
        items: [
            {id: '1', nome: 'Bife de vaca'},
            {id: '2', nome: 'Bife de franco'},
            {id: '3', nome: 'Frango'},
            {id: '4', nome: 'Bife suíno'},
        ],
        countItems: 1,
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
            disabled={false}
            />
        )
    }

    countNumberOfItems = (active) => {
        console.log(active)
        console.log(this.state.countItems)
        if(!active){
            this.props.navigation.navigate('FoodsItems')
        }
        else {
            console.log('aqui')
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
        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10, opacity: this.state.isVisible ? 0.1 : 1}}>
                <Text style={styles.descriptionText}>{`Escolha ${this.state.countItems} proteina`}</Text>
                <View style={{flex: 1, backgroundColor: defaultThemes.colors.withe}}>
                    <GridOfItems
                        items={this.state.items}
                        numColumns={2}
                        renderItem={this.renderList}
                        keyExtractor={items => items.id}
                    />
                    <ConfirmItemsSelect
                        visible={this.state.isVisible}
                        items={this.state.itemSeletect}
                    />
                </View>
                <Button
                    title="next"
                    onPress={() => this.props.navigation.navigate('FoodsItems', {
                        active: true
                    
                    })}
                />

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

export default connect(mapStateToProps, null)(Meats)