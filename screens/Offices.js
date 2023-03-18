import * as React from 'react';
import {FlatList, Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {OFFICES} from '../data/data';

const Item = ({name}) => {
    return (
        <View style={styles.item}>
            <Text style={{color: 'black'}}>{name}</Text>
        </View>
    );
}
export default function Offices() {


    const renderItem = ({item}) => (
        <Item name={item.name}/>
    );
    return (
        <View>
            <FlatList
                data={OFFICES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.3,
    },
});