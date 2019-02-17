import React, {PureComponent} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import SimmerPlaceHolder from 'react-native-shimmer-placeholder'

class ItemResutaurant extends PureComponent {

    state = {
        imageVisible: false
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.list}
                onPress={this.props.onPress}
            >   
                <SimmerPlaceHolder
                    style={{ width: 60, height: 60, borderRadius: 20, marginRight: 15 }}
                    visible={this.state.imageVisible}
                    backgroundColorBehindBorder={'#fff'}
                >
                <View style={styles.imageName}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 20, marginRight: 15 }}
                        source={{uri:this.props.urlImage}}
                        onLoad={() => this.setState({imageVisible: true})}
                        />
                        <Text style={{fontSize: 18, color: '#1d6346'}}>{this.props.restaurantName}</Text>   
                </View>
                </SimmerPlaceHolder>
                <View style={styles.description}>
                    <View style={styles.descriptionItens}>
                        <Text style={styles.fontTitle}>Distância</Text>
                        <Text style={styles.fonts}>{this.props.distance} km</Text>   
                    </View>
                    <View style={styles.descriptionItens}>
                        <Text style={styles.fontTitle}>status</Text>
                        <Text style={styles.fonts}>{this.props.status}</Text>   
                    </View>
                    <View style={styles.descriptionItens}>
                        <Text style={styles.fontTitle}>Avaliação</Text>
                        <Text style={styles.fonts}>{this.props.avaliation} pontos</Text>   
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
    },
    imageName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    descriptionItens: {
        flexDirection: 'column',
        margin: 10
    },
    fonts: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color:'#000',
    },
    fontTitle: {
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
})

export default ItemResutaurant