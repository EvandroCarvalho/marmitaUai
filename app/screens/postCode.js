import React, {PureComponent} from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native'
import InputTextComponent from '../components/inputTextComponent'
import { connect } from 'react-redux'
import { getLocationByCEP } from '../action/appActions'
import ModalComponent from '../components/modalComponent'

const { width } = Dimensions.get('window')

class GetPostCode extends PureComponent {

  state = {
    postCode: ''
  }

  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  render(){
    return(
    <View style={{flex:1, width: width, backgroundColor: '#fff', marginTop: 20, padding: 20, opacity: this.props.loading ? 0.5 : 1 }}>
      <InputTextComponent
        placeholder={'CEP'}
        value={this.state.postCode}
        onChangeText={(text) => {
          this.setState({postCode: text.replace( /^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1$2-$3")})
        }}
        maxLength={9}
        multiline={false}
        keyboardType={'numeric'}
        fontSize={18}
      />
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.consultButtom}
          onPress={ () => this.props.getLocationByCEP(this.state.postCode, this.props) }
        >
          <Text style={{textAlign: 'center', color: '#fff'}}>Consultar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('RegisterUserLocation')}
        >
          <Text style={styles.addressButtom}>Não sei meu CEP!</Text>
        </TouchableOpacity>
      </View>
      <ModalComponent
        visible={this.props.loading}
        loadIndicator={this.props.loading}
      />
    </View>
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.appReducer.loading
})

export default connect(mapStateToProps, { getLocationByCEP })(GetPostCode)

const styles = StyleSheet.create({
  consultButtom: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#e54'
  },
  addressButtom: {
    marginLeft: 10,
    padding: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 15,
    color:'#e54' 
  }
})