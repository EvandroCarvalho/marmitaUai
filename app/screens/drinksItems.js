import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';


const popAction = StackActions.pop({
    n: 3,
});



class DrinksItems extends React.PureComponent {
     static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.dispatch(popAction)}><Text>Lista</Text></TouchableOpacity> 
        }
    }
    render(){
        console.log(this.props.navigation.StackActions)
        return(
            <View>
                <Text>Modo de pagamento</Text>
            </View>
        )
    }
}

export default DrinksItems