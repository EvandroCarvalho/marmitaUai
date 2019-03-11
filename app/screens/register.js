import React, {PureComponent} from 'react'
import { Dimensions, ScrollView, Animated, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import ButtomCustomer from '../components/buttonCustomer'
import { connect } from 'react-redux'

import { createUser } from '../actions/appServicesActions'
import defaultThemes from '../styles/defaultThemes';
import { TextInputMask } from 'react-native-masked-text';

const { width, height } = Dimensions.get('window')

class Register extends PureComponent {

  state = {
    dataUser: {
      name: '',
      email: '',
      password: '',
      telephone: '',
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

  render(){
    return(
      <Animated.View
        style={[this.state.form.getLayout(), styles.container]}
      >
        <ScrollView style={{flex: 1}}>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Nome'}
            underlineColorAndroid='transparent'
            autoCorrect={false}
            onChangeText={ (text) => this.setState({dataUser: {...this.state.dataUser, name: text}})} 
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'E-mail'}
            underlineColorAndroid='transparent'
            autoComplete={'email'}
            textContentType={'emailAddress'}
            autoCorrect={false}
            onChangeText={ (text) => this.setState({dataUser: {...this.state.dataUser, email: text}})} 
          />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Senha'}
            onChangeText={ (text) => this.setState({dataUser: {...this.state.dataUser, password: text}})} 
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            style={styles.inputStyle}
            placeholder={'Telefone'}
            onChangeText={ (text) => this.setState({dataUser: {...this.state.dataUser, telephone: text}})} 
            value={this.state.dataUser.telephone}       
          />
          <ButtomCustomer
            text='Salvar'
            onPress={()=> {
              ToastAndroid.show('Seu usuário foi criado com sucesso, em breve você recebera um e-mail de confirmação', ToastAndroid.LONG)
              this.props.createUser(this.state.dataUser, this.props.navigation)
            }}
            disabled={ !!(this.state.dataUser.email && this.state.dataUser.password && this.state.dataUser.name && this.state.dataUser.telephone) }
          />
        </ScrollView>
      </Animated.View>
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
    marginLeft: -500,
  },
  inputStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d3d3d3',
    fontSize: 15,
    fontFamily: 'Roboto'
  }
})

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, { createUser })(Register)