import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackActions } from 'react-navigation';


const popAction = StackActions.pop({
    n: 3,
});



class PayMode extends React.PureComponent {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.dispatch(popAction)}><Text>Lista</Text></TouchableOpacity> 
        }
    }
    render(){
        
        return(
            <View>
                <Text>Modo de pagamento</Text>
            </View>
        )
    }
}

export default PayMode