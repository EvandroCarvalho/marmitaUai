import React, { Component } from 'react'
import { View,
    Text,
    BackHandler,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions,
    Easing } from 'react-native'
import Item from '../components/ItemRestaurant'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import tab from '../route/tabs'
import SearchBar from '../components/searchBar';

const {width, height} = Dimensions.get('window')
class List extends Component { 

    static navigationOptions = {
        header:null
    }
/*         title: 'Restaurantes próximos',
        headerTitleStyle: {
            width: "90%",
            textAlign: 'center'
        },
        headerStyle: {
            backgroundColor: '#ab4949',
        },
        headerTintColor: '#fff',
        headerLeft: null,
        headerRight: (
            <TouchableOpacity
                style={{flex: 1, marginRight: 5, padding: 20, justifyContent: 'center', alignItems: 'center'}}
            >
                <Image
                    style={{width: 20, height: 20}}
                    source={require('../assets/images/login.png')}
                />
                <Text style={{color:'#fff'}} >logar</Text>
            </TouchableOpacity>
        )
    } */

    state = {
        list: new Animated.ValueXY(0,0)
    }



    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        Animated.spring(this.state.list, {
            toValue: {
                x:-500,
                y:0
            },
            duration: 1000,
          //  easing: Easing.elastic(2)
            
        }).start()
    }

    handleBackPress = () => {
        BackHandler.exitApp()
        return true
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View>
                    <SearchBar/>
                </View>
                <Animated.View
                    style={[this.state.list.getLayout(), styles.container]}
                >
                <ScrollView showsVerticalScrollIndicator={true} style={{flex: 1}}

                >
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                    <Item
                        restaurantName = {'Restaurante X'}
                        distance = {1}
                    />
                </ScrollView>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        width: width,
        height: height,
        marginLeft: 500
    },
    contentContainer: {
        paddingVertical: 20
      }
})

export default List