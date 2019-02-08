import React, { Component } from 'react';
import { Animated,
  View,
  StyleSheet,
  Easing,
  Text,
  Dimensions,
  StatusBar,
      } from 'react-native';
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { getGetLocation } from '../action/appActions'
import ModalComponent from '../components/modalComponent'

const {width, height} = Dimensions.get('screen')
class Welcome extends Component {
  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.state = {
      region: null,
      error: '',
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
          duration: 2000,
          easing : Easing.elastic(2)
     }
    ).start( () =>  
      this.props.getGetLocation(this.props) 
    )
  }

  loading = (loading) => {
    if(loading) {
      return (
        <View>
        <ModalComponent
        visible={loading}
        loadIndicator={loading}
        color={'#f1be13'}
        />
        <Text style={{color: '#e54',fontSize: 20,}}>Buscando sua localização</Text>
      </View>
      )
    }
  }


  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width/3]
    })
    return (
      <View style={[styles.container, {opacity: this.props.loading ? 0.5 : 1 }]}>
        <StatusBar backgroundColor='#f1be13'/>
        <Animated.View style={[styles.animted, {marginLeft} ]} >
          <Text style={styles.text}>MarmitaUai</Text>
        </Animated.View>
        <View style={{position: 'absolute'}}>
          {this.loading(this.props.loading)}
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
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
    backgroundColor: '#f1be13',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  animted: {
    alignItems: 'center',
    height: height / 3 
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
