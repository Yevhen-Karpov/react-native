import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => (
  <NestedScreen.Navigator>
    <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts} />
    <NestedScreen.Screen name="Comments" component={CommentsScreen} />
  </NestedScreen.Navigator>
);
export default PostsScreen;
