import React from 'react'
import { View, FlatList } from 'react-native'


class GridOfItems extends React.PureComponent {

    formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns)
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
        while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({key: `blank ${numberOfElementsLastRow}`, empty: true })
            numberOfElementsLastRow = numberOfElementsLastRow + 1
        }
        return data
    }
    

    render() {
        const {numColumns} = this.props
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <FlatList
                    data={this.formatData(this.props.items, numColumns)}
                    renderItem={this.props.renderItem}
                    keyExtractor={this.props.keyExtractor}
                    numColumns={numColumns}
                />
            </View>
    )
    }
}

export default GridOfItems