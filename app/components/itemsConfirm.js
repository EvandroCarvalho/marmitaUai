import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import defaultThemes from '../styles/defaultThemes'
import ButtonCustomer from './buttonCustomer'



class ConfirmItems extends PureComponent {


    checkListItems = (option) => {
        if(option.length > 0) {
            let listOfItem = option.map((item,key) => {
                return (
                    <View key={key} 
                        style={{flexDirection: 'row', alignItems:'center', marginLeft: 20}} 
                    >
                        <Image
                            style={{width:10, height: 10}}
                            source={require('../assets/images/icon_check.png')}
                        />
                        <Text key={key} style={{fontSize: 15, padding: 10, textAlign: 'center'}}>{item.nome}</Text>
                    </View>
                )
            })
            return listOfItem
        } else {
            return (
                <Text style={{marginLeft: 45}}>N/A</Text>
            )
        }
    } 
    render() {
        const itemsSelected = this.props.itemsSelected
        console.log(this.props)
        return (
            <View>
                <View style={styles.titleItems}>
                    <Image
                        style={{width:40, height: 40}}
                        source={require('../assets/images/icons8-check-file-64.png')}
                    />
                    <Text style={styles.titleMenu}>Seu Pedido</Text>
                </View>
                <View style={{marginLeft: 10}}>
                    <View>
                        <Text style={styles.title}>Carne:</Text>
                        {this.checkListItems(itemsSelected.meats)}
                    </View>
                    <View>
                        <Text style={styles.title}>Complementos:</Text>
                        {this.checkListItems(itemsSelected.complements)}
                    </View>
                    <View>
                        <Text style={styles.title}>Saladas:</Text>
                        {this.checkListItems(itemsSelected.salads)}
                    </View>
                    <View>
                        <Text style={styles.title}>Bebida:</Text>
                        {this.checkListItems(itemsSelected.drinks)}
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: defaultThemes.colors.yellowTheme}}>
                    <ButtonCustomer
                        text={'Editar pedido'}
                        disabled={true}
                        onPress={() => this.props.navigation.navigate('DrinksItems')}
                    />
                    <ButtonCustomer
                        text={'Confirmar'}
                        onPress={() => this.props.confirmButton(true)}
                        disabled={true}
                    />
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    titleMenu: {
        textAlign: 'center',
        padding: 10,
        color: defaultThemes.colors.yellowTheme,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    titleItems: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: defaultThemes.colors.withe,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: defaultThemes.colors.yellowTheme,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 15
        
    }
})

export default ConfirmItems