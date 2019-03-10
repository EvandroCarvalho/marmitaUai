import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Animated, Easing } from 'react-native'
import defaultThemes from '../styles/defaultThemes'
import ButtonCustomer from './buttonCustomer';


class AddressConfirm extends PureComponent {

    state = {
        anim: new Animated.ValueXY(0,0),
        address: {
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: 'Uberlândia',
            state: '',
        }
    }

    componentDidMount = () => {
        Animated.timing(this.state.anim, {
            toValue: {
                x: -500,
                y: 0
            },
            duration: 1000,
            easing: Easing.elastic(2)
        }).start()
    }

    render() {
        console.log(this.props.userLocale)
        console.log(this.state.address)
        const {street, number, neighborhood, complement, city} = this.props.userLocale
        return(
            <Animated.View style={[this.state.anim.getLayout(), styles.container]}>
                <View style={styles.titleItems}>
                    <Image
                        style={{width:40, height: 40}}
                        source={require('../assets/images/placeholder.png')}
                    />
                    <Text style={styles.titleMenu}>Local da entrega</Text>
                </View>
                <View style={{marginLeft: 30}}>
                    <View style={styles.inputView}>
                        <Text style={styles.title}>Rua:</Text>
                        <TextInput
                            value={this.state.address.street || street}
                            underlineColorAndroid='#d3d3d3'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({
                                address: {...this.state.address, street: text }
                            })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.title}>Numero:</Text>
                        <TextInput
                            value={this.state.address.number || number}
                            underlineColorAndroid='#d3d3d3'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({
                                address: {...this.state.address, number: text }
                            })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.title}>Complemento:</Text>
                        <TextInput
                            value={this.state.address.complement || complement}
                            underlineColorAndroid='#d3d3d3'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({
                                address: {...this.state.address, complement: text }
                            })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.title}>Bairro:</Text>
                        <TextInput
                            value={this.state.address.neighborhood || neighborhood}
                            underlineColorAndroid='#d3d3d3'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({
                                address: {...this.state.address, city: text }
                            })}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.title}>Cidade:</Text>
                        <TextInput
                            value={this.state.address.city || city}
                            underlineColorAndroid='#d3d3d3'
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({
                                address: {...this.state.address, city: text }
                            })}
                        />
                    </View>
                    <ButtonCustomer
                        text={'Confirmar'}
                        disabled={true}
                        onPress={() => alert('Em construção')}
                    />
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    titleMenu: {
        textAlign: 'center',
        padding: 10,
        color: defaultThemes.colors.yellowTheme,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    titleItems: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: defaultThemes.colors.withe,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: defaultThemes.colors.yellowTheme,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 15
        
    },
    container: {
        flex:1,
        backgroundColor: defaultThemes.colors.withe,
        width: '100%',
        height: '100%',
        marginLeft: 500
    },
    inputView: {
        width: '90%'
    }
})

export default AddressConfirm