import React, { Component } from 'react'
import { View,
    BackHandler,
    StyleSheet,
    Animated,
    Dimensions,
    Easing,
    ScrollView } from 'react-native'
import Item from '../components/ItemRestaurant'
import SearchBar from '../components/searchBar';
import { connect } from 'react-redux'

const {width, height} = Dimensions.get('window')
class ListRestaurants extends Component { 

    static navigationOptions = {
        header:null
    }

    state = {
        list: new Animated.ValueXY(0,0)
    }



    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp()
            return false
        })
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
                <ScrollView showsVerticalScrollIndicator={true}

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

mapStateToProps = (state) => (
    {
        userLocation: state.appReducer.userLocale
    }
)

export default  connect(mapStateToProps, null)(ListRestaurants)