import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import defaultThemes from '../styles/defaultThemes';
import ButtonCustomer from '../components/buttonCustomer'
import {getLocationByAddress} from '../actions/appActions'
import {connect} from 'react-redux'

class LocationByDataAddress extends PureComponent {

    state = {
        address: {
            street: '',
            neighborhood: '',
            city: ''
        }
    }

    checkAddressIsValid = ({errorGetLocationAdress}) => {
        if(errorGetLocationAdress) {
          return (
            <View style={{marginTop: 15}}>
              <Text style={{fontSize: 18, color: '#ed5'}} >O endereço digitado é invalido</Text>
            </View>
          ) 
        } else {
            <View/>
        }
      }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'Rua'}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({address: {...this.state.address, street: text}})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'Bairro'}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({address: {...this.state.address, neighborhood: text}})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={'Cidade'}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({address: {...this.state.address, city: text}})}
                    />
                </View>
                <ButtonCustomer
                    style={styles.submitButton}
                    text={'Buscar'}
                    onPress={()=> this.props.getLocationByAddress(this.state.address, this.props.navigation)}
                    disabled={!!(this.state.address.city && this.state.address.neighborhood && this.state.address.street)}
                />
                {this.checkAddressIsValid(this.props)}
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        errorGetLocationAdress: state.appReducer.errorGetLocationAdress
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputContainer: {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 0.5,
        width: '90%',
    },
    inputStyle: {
        fontSize: 15,
        fontFamily: 'Roboto',
        width: '90%'
    },   
    submitButton: {
        backgroundColor: defaultThemes.colors.withe,
        width: 300,
        borderColor: defaultThemes.colors.yellowTheme,
        borderBottomColor: defaultThemes.colors.yellowTheme,
        marginTop: 50
    }
})

export default connect(mapStateToProps, {getLocationByAddress})(LocationByDataAddress)
