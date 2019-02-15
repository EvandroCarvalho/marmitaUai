import React, {PureComponent} from 'react'
import { Dimensions, TouchableOpacity, View, Text, StyleSheet, BackHandler, Alert } from 'react-native'
import InputTextComponent from '../components/inputTextComponent'
import { connect } from 'react-redux'
import { getLocationByCEP, verifyConnection } from '../action/appActions'
import { NavigationEvents } from 'react-navigation'
import { TextInputMask } from 'react-native-masked-text'

const { width } = Dimensions.get('window')

class GetLocationByPostCode extends React.Component {

  state = {
    postCode: '',
    buttomActive: false
  }

  componentWillMount = () => {
    this.props.verifyConnection()
  }


/* 
 componentWillReceiveProps = (nextProps) => {
  if(nextProps.errorGetLocationCEP != this.props.errorGetLocationCEP) {
    this.setState({postCode: ''})
  }
 } */

  handleBackPress = () => {
    BackHandler.exitApp()
    return false
  }

  checkPostCodeIsValid = ({errorGetLocationCEP}) => {
    if(errorGetLocationCEP) {
      return (
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 18, color: '#ed5'}} >O CEP digitado é invalido</Text>
        </View>
      ) 
    }
  }
  onChangeInput = (value) => {
    this.setState({postCode: value/* .replace( /^([\d]{2})([\d]{3})-*([\d]{3})/, "$1$2-$3") */})
    if (value.length == 9) {
      this.setState({ buttomActive: true })
    } else if (this.state.buttomActive) {
      this.setState({buttomActive: false})
    }
  }


  render(){
    return(
      <View style={[styles.container, {opacity: this.props.loading ? 0.5 : 1}]}>
        <NavigationEvents
          onWillFocus={ () => {BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)}}
          onDidBlur={ () => BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)}
        />
        <TextInputMask
          style={styles.inputStyle}
          maxLength={9}
          value={this.state.postCode}
          onChangeText={this.onChangeInput}
          type={'zip-code'}
          placeholder="CEP"
        />
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={[styles.consultButtom, 
        {opacity: this.state.buttomActive ? 1 : 0.5} ]}
          disabled={!this.state.buttomActive}
          onPress={ () => this.props.getLocationByCEP(this.state.postCode, this.props) }
        >
          <Text style={{textAlign: 'center', color: '#fff'}}>Consultar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={ () => this.props.navigation.navigate('RegisterUserLocation')}
        >
          <Text style={styles.addressButtom}>Não sei meu CEP!</Text>
        </TouchableOpacity>
        {this.checkPostCodeIsValid(this.props)}
      </View>
    </View>
    )
  }

}

const mapStateToProps = (state) => ({
  loading: state.appReducer.loading,
  connectionInfo: state.appReducer.connectionInfo,
  errorGetLocationCEP: state.appReducer.errorGetLocationCEP
})

export default connect(mapStateToProps, { getLocationByCEP, verifyConnection })(GetLocationByPostCode)

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
  },
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
    color:'#e54',
  },
  inputStyle: {
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
    marginBottom: 10,
    fontFamily: 'Roboto'
  }
})