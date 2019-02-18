import React from 'react'

import { Modal,
    View,
    Text,
    StyleSheet,
    Dimensions, 
    Image } from 'react-native'

import ButtonCustomer from '../components/buttonCustomer'

const { width, height  } = Dimensions.get('window')

class ConfirmItemsSalect extends React.PureComponent {
    render () {
        const items = [...this.props.items]
        return (
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.props.visible}
                    presentationStyle={'overFullScreen'}
                    transparent={true}
                >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: width, height: height}}>
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row', backgroundColor: '#f1be13', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                            <Text style={styles.textStyle}>
                                Items Selecionados
                            </Text>
                            <Image
                                style={{width: 50, height: 50}}
                                source={require('../assets/images/icons8-check-file-64.png')}
                            />
                        </View>
                        { items.map((item, key) => (
                            <View key={key} 
                                style={{flexDirection: 'row', alignItems:'center', marginLeft: 10}} 
                            >
                                <Image
                                    style={{width:10, height: 10}}
                                    source={require('../assets/images/icon_check.png')}
                                />
                                <Text key={key} style={{fontSize: 15, padding: 10, textAlign: 'center'}}>{item.nome}</Text>
                            </View>
                        )) }
                        <View style={{flexDirection: 'row'}}>
                            <ButtonCustomer
                                text={'Confirmar'}
                                disabled={this.props.visible}
                            />
                            <ButtonCustomer
                                text={'Adicionar Bebida'}
                                disabled={this.props.visible}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        borderRadius: 10,
        borderWidth: 1,
        elevation: 3,
        borderColor: '#f1be13'
    },
    textStyle: {
        textAlign: 'center',
        fontFamily:'Roboto',
        fontSize: 18,
        marginTop: 5,
        padding: 10,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default ConfirmItemsSalect

