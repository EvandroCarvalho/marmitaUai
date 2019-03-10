import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import defaultThemes from '../styles/defaultThemes';
import ItemsConfirm from '../components/itemsConfirm';
import AddressConfirm from '../components/addressConfirm';


class Confirm extends React.PureComponent {

    state = {
        confirm: false
    }

    changeComponent = (confirm, props) => {
        console.log(userLocale)
        console.log(this.state.confirm)
        let {itemsSelected, userLocale, navigation} = props
        if(!confirm) {
            return (
                <ItemsConfirm
                    itemsSelected={itemsSelected}
                    navigation={navigation}
                    confirmButton={(value) => this.setState({confirm: value})  }
                />
            )
        } else {
            return(
                <AddressConfirm
                    userLocale={userLocale}
                />
            )
        }
    }

    render(){  
        return(
            <View style={{flex: 1}}>
                <ScrollView>
                    {this.changeComponent(this.state.confirm, this.props)}
                </ScrollView>
                
            </View>
        )
    }
}

mapStateToProps = (state) => (
    {
        itemsSelected: state.appServiceReducer.itemsSelected,
        userLocale: state.appReducer.userLocale
    }
)


export default connect(mapStateToProps, null)(Confirm)