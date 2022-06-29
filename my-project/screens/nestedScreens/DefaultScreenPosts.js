import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.imgContainer}>
            <Image source={{ uri: item.photo }} style={styles.img} />
            <Button onPress={() => navigation.navigate("Comments")}>
              <EvilIcons name="comment" size={24} color="black" />
            </Button>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultScreenPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: "100%",
    height: 300,
    marginBottom: 32,
  },
  img: {
    width: "100%",
    height: 240,
  },
});
