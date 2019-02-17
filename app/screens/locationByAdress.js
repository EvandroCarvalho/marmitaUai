import React, {PureComponent} from 'react'
import { Dimensions, ScrollView, Animated, StyleSheet, View, Text } from 'react-native'
import InputTextComponent from '../components/inputTextComponent'
import ButtomCustomer from '../components/buttonCustomer'
import { connect } from 'react-redux'

import { getLocationByAddress } from '../actions/appActions'

const { width, height } = Dimensions.get('window')

class LocationByAdress extends PureComponent {

  state = {
    address: {
      city: '',
      complement: '',
      street: '',
      number: ''
    },
    form: new Animated.ValueXY(0,0)
  }

  componentWillMount = () => {
    Animated.spring(this.state.form, {
            toValue: {
                x:500,
                y:0
            },
            duration: 1000,
          //  easing: Easing.elastic(2)
            
        }).start()
  }

  CheckAdressIsValid = ({errorGetLocationAdress}) => {
    if(errorGetLocationAdress) {
      return (
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 18, color: '#ed5', textAlign: 'center'}} >O Endereço digitado é invalido</Text>
        </View>
      ) 
    }
  }

    render(){
      return(
          <Animated.View
            style={[this.state.form.getLayout(), styles.container]}
          >
          <ScrollView style={{flex: 1}}>
          <InputTextComponent
            placeholder={'Rua'}
            onChangeText={ (text) => this.setState(
              {
                address: {
              ...this.state.address, street: text
                }
              }
              )
            } 
          />
          <InputTextComponent
            placeholder={'Numero'}
            onChangeText={ (text) => this.setState(
              {
                address: {
              ...this.state.address, number: text
                }
              }
              )
            }          
          />
          <InputTextComponent
            placeholder={'Complemento'}
            onChangeText={ (text) => this.setState(
              {
                address: {
              ...this.state.address, complement: text
                }
              }
              )
            }        
            />  
          <InputTextComponent
            placeholder={'Cidade'}
            onChangeText={ (text) => this.setState(
              {
                address: {
              ...this.state.address, city: text
                }
              }
              )
            }           
          />
          <ButtomCustomer
            text='Listar Restaurantes'
            onPress={()=> this.props.getLocationByAddress(this.state.address, this.props.navigation)}
            disabled={ !!(this.state.address.street && this.state.address.number && this.state.address.city) }
            />
            {this.CheckAdressIsValid(this.props)}
            </ScrollView>
        </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: width,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
    marginLeft: -500
  }
})

const mapStateToProps = (state) => ({
  errorGetLocationAdress: state.appReducer.errorGetLocationAdress
})

export default connect(mapStateToProps, { getLocationByAddress })(LocationByAdress)