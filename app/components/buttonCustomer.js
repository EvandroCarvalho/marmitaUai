import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

class ButtomCustomer extends React.Component {


  handlerButtom = () => {
    if(this.props.loading) {
      return <ActivityIndicator size="small" color={'#007f3f'}/>
    } else {
      return <Text style={{opacity: this.props.disabled ? 1 : 0.5, fontWeight: 'bold'}}>{this.props.text}</Text>
    }
  }


  render() {
    return (
      <TouchableOpacity
        style={[styles.buttom, {opacity: this.props.disabled ? 1 : 0.5}]}
        disabled = { !this.props.disabled }
        onPress={() => {
          this.props.onPress()
          this.setState({loading: false})
        }}
      >
        {this.handlerButtom()}
      </TouchableOpacity>
    )
  }
}

mapStateToProps = (state) => (
  
  {loading: state.appReducer.loading}
)

export default connect(mapStateToProps,null)(ButtomCustomer)

const styles = StyleSheet.create({
  buttom: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    elevation: 3,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    opacity: 1
    }
})