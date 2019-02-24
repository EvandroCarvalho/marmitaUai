import React, { Component } from 'react'
import { View,
    BackHandler,
    StyleSheet,
    Animated,
    Dimensions,
    Easing,
    ScrollView,
    TextInput } from 'react-native'
import Item from '../components/ItemRestaurant'
import { connect } from 'react-redux'
import { getRestaurantsList } from '../actions/appServicesActions'
import { setSelectedRestaurant } from '../actions/appServicesActions'
import ModalComponent from '../components/modalComponent'
import defaultThemes from '../styles/defaultThemes';

const {width, height} = Dimensions.get('window')
class ListRestaurants extends Component { 

    static navigationOptions = {
        header:null
    }

    state = {
        list: new Animated.ValueXY(0,0),
        textSearch: '',
        restaurants: []
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({restaurants: nextProps.restaurantsList})
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

    waitingGetList = ({modalVisible, loading}) => {
        return (
            <View>
            <ModalComponent
                visible={modalVisible}
                loading={loading}
            />
        </View>
        )
    }


    filterRestaurants = (text) => 
        this.setState({
            textSearch: text,
            restaurants: this.props.restaurantsList.filter((item) => {
                if (item.nome.toUpperCase().includes(text.toUpperCase())) {
                    return item
                }else if (!text) {
                    return item
                }
        })
    })

    clearInputSeach = () => {
        this.setState({textSearch: '', restaurants: this.props.restaurantsList})
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.searchStyle}>
                    <TextInput
                        value={this.state.textSearch}
                        style={{width:'90%', fontSize: 18, fontFamily:'Roboto'}}
                        onChangeText={this.filterRestaurants}
                        placeholder={'Nome do restaurante'}
                    />
                </View>
                <Animated.View
                    style={[this.state.list.getLayout(), styles.container]}
                >
                    <ScrollView 
                        showsVerticalScrollIndicator={true}
                    >
                    {this.state.restaurants.map((item, index) => (
                        <Item
                            key={index}
                            urlImage={item.urlImage}
                            restaurantName={item.nome}
                            distance={Math.floor(Math.random() * 10) + 1 }
                            status={item.status}
                            avaliation={item.avaliation}
                            onPress={()=> {
                                this.clearInputSeach()
                                this.props.setSelectedRestaurant(item, this.props)
                            
                            }}
                        />
                    ))}
                    {this.waitingGetList(this.props)}
                    </ScrollView>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: defaultThemes.colors.withe,
        width: width,
        height: height,
        marginLeft: 500
    },
    contentContainer: {
        paddingVertical: 20
      },
      searchStyle: {
        flexDirection: 'row',
        borderColor: '#d3d3d3',
        borderWidth: 0.5,
        elevation: 2,
        backgroundColor:'#fbfaf5',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
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

export default  connect(mapStateToProps, {getRestaurantsList, setSelectedRestaurant})(ListRestaurants)