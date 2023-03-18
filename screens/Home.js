import {useQuery, gql} from '@apollo/client';
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, Image} from "react-native";
import React from "react";


const POSTS = gql`query GetPostsEdges {
  posts {
    nodes {
      title
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;
const Post = ({item}) => {
    let imageUrl = null
    if (item.featuredImage != null) {
        imageUrl = item.featuredImage.node.sourceUrl;
    }

    return (
        <View style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            height: 100,
            flexDirection: 'row',
            margin: 10
        }}>
            <View style={{
                width: 75,
                height: 75,
            }}>
                <Image source={{
                    uri: imageUrl
                }} style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 10,
                    resizeMethod: "crop",
                    resizeMode: "contain",
                    height: 75,
                    width: 75
                }}
                ></Image>
            </View>
                <View style={{flex: 1, padding: 8}}>
                    <Text numberOfLines={3} style={{fontSize: 18, fontWeight: "bold"}}>{item.title}</Text>
                </View>
        </View>
    )
}


const PostList = () => {
    const {loading, error, data} = useQuery(POSTS);
    if (loading) return <View style={{flex: 1}}><ActivityIndicator/></View>;
    if (error) return <Text>Error :(</Text>;
    return (
        <FlatList
            data={data.posts.nodes}
            renderItem={({item}) => <Post item={item}/>}
            keyExtractor={(item) => item.id}
        />
    );
};


export default function Home() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <PostList/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});