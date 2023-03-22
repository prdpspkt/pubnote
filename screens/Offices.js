import {useQuery, gql} from '@apollo/client';
import {ActivityIndicator, FlatList, SafeAreaView, Text, View, TouchableOpacity} from "react-native";
import React, {Component} from "react";


export default class Offices extends Component {
    render() {
        const OFFICES = gql`query GetPostsEdges {
                              categories(where: {parent: 18}) {
                                nodes {
                                  name
                                  id
                                }
                              }
                            }`;
        const Office = ({item}) => {
            return (
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 8,
                        flexDirection: 'row',
                        margin: 8
                    }}>
                        <View style={{flex: 1, padding: 8}}>
                            <Text numberOfLines={3} style={{fontSize: 16, fontWeight: "bold"}}>{item.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }


        const OfficeList = () => {
            const {loading, error, data} = useQuery(OFFICES);
            if (loading) return <View style={{flex: 1}}><ActivityIndicator/></View>;
            if (error) return <Text>{error}</Text>;
            return (
                <FlatList
                    data={data.categories.nodes}
                    renderItem={({item}) => <Office item={item}/>}
                    keyExtractor={(item) => item.id}
                />
            );
        };

        return (
            <SafeAreaView style={{flex: 1}}>
                <OfficeList/>
            </SafeAreaView>
        )
    }
}
