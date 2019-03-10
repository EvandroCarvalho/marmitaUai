import React from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView, TextInput, Image, StyleSheet } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {connect} from 'react-redux'
import defaultThemes from '../styles/defaultThemes';
import ConfirmItems from '../components/itemsConfirm';


class PayMode extends React.PureComponent {

    state = {
        radio_props:  [
            {label: 'Crédito', value: "credito" },
            {label: 'Debito', value: "debito" },
            {label: 'Em Dinheiro',value: "dinheiro" }
        ],
        payMode: ''
    }

    handlerMoney = ({payMode}) => {
        if(payMode === 'dinheiro') {
            return (
                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Text>
                        Troco para:
                    </Text>
                    <TextInput
                        style={{borderBottomColor: '#d3d3d3'}}
                    />
                </View>
            )
        }
    }

    render(){  
        const {itemsSelected} = this.props
        return(
            <View style={{flex: 1}}>
                <ScrollView>
                     <View>
                        <Text style={{backgroundColor: '#d3d3d3', textAlign: 'center', padding: 10}}>Selecione o modo Pagamento</Text>
                        <RadioForm 
                            radio_props={this.state.radio_props}
                            label={"valor"}
                            initial={0}
                            onPress={(value) => this.setState({payMode: value})}
                            buttonColor={'#fe0'}
                            selectedButtonColor={'#fe0'}
                            formHorizontal={true}
                            labelStyle={{marginRight: 10}}
                            style={{marginTop: 20}}
                            />
                    </View>
                        {this.handlerMoney(this.state)}
                </ScrollView>
                
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        itemsSelected: state.appServiceReducer.itemsSelected
    }
)

export default connect(mapStateToProps, null)(PayMode)