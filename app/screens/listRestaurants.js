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
import { getRestaurantsList } from '../action/appServicesActions'
import ModalComponent from '../components/modalComponent'

const {width, height} = Dimensions.get('window')
class ListRestaurants extends Component { 

    static navigationOptions = {
        header:null
    }

    state = {
        list: new Animated.ValueXY(0,0)
    }



    componentWillMount =() => {
        this.props.getRestaurantsList(this.props.userLocale)
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

    waitingList = ({modalVisible, loading}) => {
        console.log(modalVisible,loading)
        return (
            <View>
            <ModalComponent
                visible={modalVisible}
                loading={loading}
            />
        </View>
        )
    }


    render() {
        console.log(this.props)
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
                    {this.props.restaurantsList.map((item, index) => (
                        <Item
                            key={index}
                            urlImage={item.urlImage}
                            restaurantName={item.nome}
                            distance={Math.floor(Math.random() * 10) + 1 }
                            status={item.status}
                            avaliation={item.avaliation}
                        />
                    ))}
                    {this.waitingList(this.props)}
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
        userLocation: state.appReducer.userLocale,
        restaurantsList: state.restaurantsReducer.restaurantsList,
        modalVisible: state.restaurantsReducer.modalVisible,
        loading: state.restaurantsReducer.loading
    }
)

export default  connect(mapStateToProps, {getRestaurantsList })(ListRestaurants)