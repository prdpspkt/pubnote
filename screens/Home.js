import {useQuery, gql} from '@apollo/client';
import {ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React, {Component} from "react";
import PostPage from './PostPage'


function Home(props) {
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
            <TouchableOpacity onPress={()=>{props.navigation.navigate("PostPage", {id: item.id})}}>
                <View style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    height: 100,
                    flexDirection: 'row',
                    margin: 8
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
                            resizeMode: "contain",
                            height: 75,
                            width: 75
                        }}
                        ></Image>
                    </View>
                    <View style={{flex: 1, padding: 8}}>
                        <Text numberOfLines={3} style={{fontSize: 16, fontWeight: "bold"}}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const PostList = () => {
        const {loading, error, data} = useQuery(POSTS);
        if (loading) return <View style={
            {
                flex: 1,
                paddingTop: 45,
            }
        }><ActivityIndicator/>
        </View>;
        if (error) return <Text>{error.message}</Text>;
        return (
            <FlatList
                data={data.posts.nodes}
                renderItem={({item}) => <Post item={item}/>}
                keyExtractor={(item) => item.id}
            />
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <PostList/>
        </SafeAreaView>
    )
}

export default Home;