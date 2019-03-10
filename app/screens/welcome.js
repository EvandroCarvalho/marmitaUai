import React, { Component } from 'react';
import { Animated,
  View,
  StyleSheet,
  Easing,
  Text,
  Dimensions,
  StatusBar,
      } from 'react-native';
import { connect } from 'react-redux'
import { getLocationByAndroidAPI } from '../actions/appActions'
import ModalComponent from '../components/modalComponent'
import defaultThemes from '../styles/defaultThemes';

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
      this.props.getLocationByAndroidAPI(this.props) 
    )
  }

  loading = ({modalVisible, loading}) => {
    if(modalVisible) {
      return (
        <View>
          <ModalComponent
            visible={modalVisible}
            loadIndicator={loading}
            color={defaultThemes.colors.yellowTheme}
            msg={'Buscando sua localização'}
          />
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
        <StatusBar backgroundColor={defaultThemes.colors.yellowTheme}/>
        <Animated.View style={[styles.animted, {marginLeft} ]} >
          <Text style={styles.text}>MarmitaO</Text>
        </Animated.View>
        <View style={{position: 'absolute'}}>
          {this.loading(this.props)}
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return(
    {
      loading: state.appReducer.loading,
      modalVisible: state.appReducer.modalVisible
    }
  )
}

export default connect(mapStateToProps,{ getLocationByAndroidAPI })(Welcome)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultThemes.colors.yellowTheme,
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
