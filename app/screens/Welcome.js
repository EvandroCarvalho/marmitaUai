import React, { Component } from 'react';
import { Animated,
  View,
  StyleSheet,
  Easing,
  Text,
  Dimensions,
  StatusBar,
  ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { getGetLocation } from '../action/appActions'

const {width} = Dimensions.get('screen')
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get('window').height;


class Welcome extends Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.state = {
      region: null,
      error: '',
      loading: false,
      opacity: 1
    }
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 4000,
          easing : Easing.elastic(2)
     }
    ).start( () =>  {
      this.setState({
        loading: true,
        opacity: 0
      })
      this.props.getGetLocation(this.props) 
    })
  }

  loading = () => {
    if(this.state.loading) {
      return (
          <Modal 
            isVisible={this.props.modalVisible}
            backdropColor={'#f00'}
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            backdropOpacity={1}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
          >
          <ActivityIndicator
            animating = {this.state.loading}
            size = 'large'
            color = '#fff'
          />
          <Text style={{fontSize: 20, color: '#fff'}}>Buscando sua localização</Text>
          </Modal>
      )
    }
  }


  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width/3]
    })
    return (
      <View style={[styles.container, {opacity: this.state.opacity}]}>
      <StatusBar backgroundColor='#e00'/>
      <Animated.View style={[styles.animted, {marginLeft} ]} >
            <Text style={styles.text}>MarmitaUai</Text>
        </Animated.View>
        <View>
          {this.loading()}
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  console.log('state: ',state)
  return(
    {
      modalVisible: state.appReducer.modalVisible,
      loading: state.appReducer.loading
    }
  )

}

export default connect(mapStateToProps,{getGetLocation})(Welcome)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animted: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
  loading: {
    flex:0.1,
    marginBottom: 10
  }
});
