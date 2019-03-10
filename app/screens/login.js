import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import ButtonCustomer from '../components/buttonCustomer'
import defaultThemes from '../styles/defaultThemes'
import {authentication} from '../actions/appServicesActions'

class Login extends React.PureComponent {

    state = {
        dataUser: {
            user: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Image
                            style={{width: 22, height: 22, marginLeft: 20, marginRight: 10, padding: 10}}
                            source={require('../assets/images/user1.png')}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({dataUser: {...this.state.dataUser, user: text}})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image
                            style={{width: 22, height: 22, marginLeft: 20, marginRight: 10, padding: 10}}
                            source={require('../assets/images/lock3.png')}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({dataUser: {...this.state.dataUser, password: text}})}
                        />
                    </View>
                    <View style={{width: '85%', flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}
                            onPress={()=> this.props.navigation.navigate('register')}
                        >
                            Ainda não tem cadastro?
                        </Text>
                        <Text style={styles.text}
                            onPress={()=> this.props.navigation.navigate('forgotPassword')}
                        >
                            Esqueci minha senha!
                        </Text>
                    </View>
                    <View style={{flex: 0.4, alignItems: 'center', justifyContent: 'flex-end', marginTop: 30}}>
                        <ButtonCustomer
                            style={styles.loginButton}
                            text={'logar'}
                            onPress={()=> this.props.authentication(this.state.dataUser, this.props)}
                            disabled={!!(this.state.dataUser.user && this.state.dataUser.password)}
                        />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    inputContainer: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 40,
        width: "85%",
        marginBottom: 20,
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color:'#e54',
        fontFamily: 'Roboto'
    },
    inputStyle: {
        fontSize: 15,
        fontFamily: 'Roboto',
        width: '90%'
    },
    loginButton: {
        backgroundColor: defaultThemes.colors.withe,
        width: 300,
        borderColor: defaultThemes.colors.yellowTheme,
        borderBottomColor: defaultThemes.colors.yellowTheme,
    }

})

export default connect(null,{authentication})(Login)