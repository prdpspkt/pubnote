import {useQuery, gql} from '@apollo/client';
import {ActivityIndicator, FlatList, SafeAreaView, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";



export default function PostPage (id){
        const POSTS = gql`
        query GetPost($id: any) {
  post(id: $id) {
    content
    title(format: RENDERED)
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`;
        const Post = ({item}) => {
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
                <View>
                    <Text>{data.post.content.rendered}</Text>
                </View>
            );
        }

        return(
            <View>
                <Post/>
            </View>
        )
}
