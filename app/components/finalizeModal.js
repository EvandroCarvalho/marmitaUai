import React from 'react'

import { Modal,
    View,
    Text,
    StyleSheet,
    Dimensions, 
    Image } from 'react-native'

import ButtonCustomer from './buttonCustomer'
import defaultThemes from '../styles/defaultThemes';

const { width, height  } = Dimensions.get('window')

class FinalizeModal extends React.PureComponent {


    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.props.visible}
                    presentationStyle={'overFullScreen'}
                    transparent={true}
                    onRequestClose={true}
                >
                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                        <View style={styles.container}>
                            <View>
                                <Text style={{textAlign: 'center'}}>
                                    Seu pedido foi encaminhado ao {this.props.restaurantName}, a previsão de entrega é de x min
                                </Text>
                            </View>
                            <View style={{width: 100, height: 60}}>
                                <ButtonCustomer
                                    text={'OK'}
                                    disabled={true}
                                    onPress={ () => this.props.navigation.navigate('listRestaurants')}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:defaultThemes.colors.withe,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 3,
        borderColor: defaultThemes.colors.yellowTheme,
        flexDirection: 'column',
        backgroundColor: defaultThemes.colors.withe,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontFamily:'Roboto',
        fontSize: 18,
        marginTop: 5,
        padding: 10,
        fontWeight: 'bold',
        color: defaultThemes.withe
    }
})


export default FinalizeModal

