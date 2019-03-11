import React from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView, TextInput, Image, StyleSheet } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {connect} from 'react-redux'
import defaultThemes from '../styles/defaultThemes';
import ButtonCustomer from '../components/buttonCustomer';
import {sendOrderToRestaurant} from '../actions/appServicesActions'
import FinalizeModal from '../components/finalizeModal';


class ShoppingCart extends React.PureComponent {

    state = {
        radio_props:  [
            {label: 'Crédito', value: "credito" },
            {label: 'Debito', value: "debito" },
            {label: 'Em Dinheiro',value: "dinheiro" }
        ],
        pay: {
            Finalprice: '',
            payMode: 'credito',
            change: ''
        },
        modalVisible: false

    }

    handlerMoney = ({payMode}) => {
        if(payMode === 'dinheiro') {
            return (
                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Text style={{color: '#000', marginRight: 10}}>
                        Troco para:
                    </Text>
                    <TextInput
                        underlineColorAndroid={'#d3d3d3'}
                        style={{width: 30}}
                        onChangeText={(text) => this.setState({pay:{...this.state.pay, change: text}})}
                    />
                </View>
            )
        }
    }

    finalizeOrder = (props) => {
        const {itemsSelected, sizeSelected, selectedRestaurant, addressToSend, dataUser} = props
        let order = {
            addressToSend,
            itemsSelected,
            sizeSelected,
            selectedRestaurant,
            payMode: this.state.pay,
            dataUser
        }
        console.log(order)
        return order
    }

    informationModal = (visible, props ) => {
        const {selectedRestaurant, navigation} = props
        console.log(visible)
        if(visible) {
            return (
                <FinalizeModal
                    visible={visible}
                    restaurantName={selectedRestaurant.nome}
                    navigation={navigation}
                />
            )
        }
    }

    render(){  
        const {itemsSelected, sizeSelected} = this.props
        console.log(this.props)
        
        return(
            <View style={{flex: 1, opacity: this.state.modalVisible ? 0.2 : 1}}>
                <ScrollView>
                    <View>
                        <View style={styles.titleItems}>
                            <Image
                                style={{width:40, height: 40, marginLeft: 40}}
                                source={require('../assets/images/piggy-bank.png')}
                            />
                            <Text style={styles.titleMenu}>Valor do pedido</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={styles.item}>
                                <Text>Valor da marmita</Text>
                                <Text>{`R$${sizeSelected.price.toFixed(2)}`}</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Adicionais</Text>
                                <Text>R$0,00</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Bebidas</Text>
                                <Text>RS0,00</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Frete</Text>
                                <Text>R$0,00</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Text>___________________</Text>
                            </View>
                            <View style={styles.item}>
                                <Text>Total</Text>
                                <Text>{`R$${sizeSelected.price.toFixed(2)}`}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleItems}>
                            <Image
                                style={{width:40, height: 40, marginLeft: 40}}
                                source={require('../assets/images/transaction.png')}
                            />
                            <Text style={styles.titleMenu}>Forma de pagamento</Text>
                        </View>  
                        <View style={{margin: 20}}>
                        <RadioForm 
                            radio_props={this.state.radio_props}
                            label={"valor"}
                            initial={0}
                            onPress={(value) => this.setState({pay: {...this.state.pay, payMode: value}})}
                            buttonColor={defaultThemes.colors.yellowTheme}
                            selectedButtonColor={defaultThemes.colors.yellowTheme}
                            formHorizontal={true}
                            labelStyle={{marginRight: 10}}
                            style={{marginTop: 20}}
                            />
                        {this.handlerMoney(this.state.pay)}
                        </View>
                    </View>
                    <View>
                        <ButtonCustomer
                            text={'Finalizar Pedido'}
                            onPress={async()=> {
                                let order = await this.finalizeOrder(this.props)
                                await this.props.sendOrderToRestaurant(order)
                                await this.setState({modalVisible: true})
                            }}
                            disabled={true}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                       {this.informationModal(this.state.modalVisible, this.props)}
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        itemsSelected: state.appServiceReducer.itemsSelected,
        sizeSelected: state.appServiceReducer.sizeSelected,
        selectedRestaurant: state.appServiceReducer.selectedRestaurant,
        addressToSend: state.appServiceReducer.addressToSend,
        dataUser: state.appServiceReducer.dataUser
    }
)

const styles = StyleSheet.create({
    titleItems: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: defaultThemes.colors.withe,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: defaultThemes.colors.yellowTheme,
        padding: 10,
        marginBottom: 10
    },
    titleMenu: {
        textAlign: 'center',
        padding: 10,
        color: defaultThemes.colors.yellowTheme,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    item: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    }
})

export default connect(mapStateToProps, {sendOrderToRestaurant})(ShoppingCart)