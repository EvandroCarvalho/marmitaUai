import React, {PureComponent} from 'react'
import { Dimensions, ScrollView, ToastAndroid, TouchableOpacity, View, Text } from 'react-native'
import InputTextComponent from '../components/inputTextComponent'
import ButtomCustomer from '../components/buttonCustomer'
import { connect } from 'react-redux'

import { getLocationAPI } from '../action/appActions'

const { width, height } = Dimensions.get('window')

class GetPostCode extends PureComponent {

  state = {
    postCode: ''
  }

    render(){
      return(
      <View style={{flex:1, width: width, backgroundColor: '#fff', marginTop: 20, padding: 20}}>
        <InputTextComponent
          placeholder={'CEP'}
          value={this.state.postCode}
          onChangeText={(text) => {
            this.setState({postCode: text.replace( /^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1$2-$3")})
/*             if(text.length === 8) {
              alert('chama serv')
            } */
          }}
          maxLength={9}
          multiline={false}
          onEndEditing={() => alert('fim')}
          keyboardType={'numeric'}
          fontSize={18}

        />
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{borderWidth: 1, borderColor: '#d3d3d3', borderRadius: 20, padding: 15, backgroundColor: '#e54'}}>
            <Text style={{textAlign: 'center', color: '#fff'}}>Consultar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.props.navigation.navigate('RegisterUserLocation')}
          >
            <Text style={{marginLeft: 10,padding: 10, width: 200, textAlign: 'center', fontSize: 15, color:'#e54' }}>Clique aqui e busque por endereço!</Text>

          </TouchableOpacity>
        </View>
      </View>
      )
    }

}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {getLocationAPI})(GetPostCode)