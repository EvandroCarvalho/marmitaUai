import React, {PureComponent} from 'react'
import { View, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import ButtomCustomer from '../components/buttonCustomer'
import defaultThemes from '../styles/defaultThemes';

class ForgotPassword extends PureComponent {

  state = {
      email: ''
  }

  render() {
      return (
          <View style={styles.container}>
              <TextInput
                  style={styles.inputStyle}
                  placeholder={'E-mail'}
                  onChangeText={ (text) => this.setState({email: text})} 
                  value={this.state.email} 
                  autoCorrect={false}      
              />
              <ButtomCustomer
                  text='Enviar'
                  onPress={() => ToastAndroid.show('Em alguns minitos você recebera um email', ToastAndroid.LONG, ToastAndroid.CENTER)}
                  disabled={true}
              />
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '90%',
      backgroundColor: defaultThemes.colors.withe,
      marginTop: 20,
      padding: 20,
    },
    inputStyle: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#d3d3d3',
      fontSize: 18,
      fontFamily: 'Roboto'
    }
  })

export default ForgotPassword
  