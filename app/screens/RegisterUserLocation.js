import React, {PureComponent} from 'react'
import { Dimensions, ScrollView, ToastAndroid } from 'react-native'
import InputTextComponent from '../components/inputTextComponent'
import ButtomCustomer from '../components/buttonCustomer'
import { connect } from 'react-redux'

import { getLocationAPI } from '../action/appActions'

const { width, height } = Dimensions.get('window')
const address = {}

validateData = (address, props) => {
    if(address.city){
        props.getLocationAPI(address, props.navigation)
    } else {
      ToastAndroid.showWithGravityAndOffset(
          'Preencha todos os campos obrigatórios',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
    }
}

class RegisterUserLocation extends PureComponent {
    render(){
        return(
        <ScrollView style={{flex:1, width: width, backgroundColor: '#fff', marginTop: 20}}>
          <InputTextComponent
            placeholder={'Rua (Obrigatório)'}
            onChangeText={ (text) => address.street = text }
          />
          <InputTextComponent
            placeholder={'Numero (Obrigatório)'}
            onChangeText={ (text) => address.number = text }
          />
          <InputTextComponent
            placeholder={'Complemento'}
            onChangeText={ (text) => address.complement = text }
          />  
          <InputTextComponent
            placeholder={'Cidade (Obrigatório)'}
            onChangeText={ (text) => address.city = text }
          />
          <ButtomCustomer
            text='Listar Restaurantes'
            onPress={()=> validateData(address, this.props)}
          />
        </ScrollView>
        )
    }

}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {getLocationAPI})(RegisterUserLocation)