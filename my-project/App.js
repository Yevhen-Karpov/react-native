import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import CreateScreen from "./screens/mainScreens/CreateScreen";
import ProfileScreen from "./screens/mainScreens/ProfileScreen";
import PostsScreen from "./screens/mainScreens/PostsScreen";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
// const [loaded] = useFonts({
//   Roboto: require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
// });

export default function App() {
  // if (!loaded) {
  //   return null;
  // }

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <NavigationContainer>
      <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreateScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

//  <AuthStack.Navigator>
//    <AuthStack.Screen
//      options={{ headerShown: false }}
//      name="Login"
//      component={LoginScreen}
//    />
//    <AuthStack.Screen
//      options={{ headerShown: false }}
//      name="Register"
//      component={RegisterScreen}
//    />
//  </AuthStack.Navigator>;
