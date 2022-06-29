import React, { useState } from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import db from "./firebase/config";
import { store } from "./redux/store";
import useRoute from "./routes/router";

// const [loaded] = useFonts({
//   Roboto: require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
// });

export default function App() {
  const [user, setUser] = useState(null);
  db.auth().onAuthStateChanged((user) => {
    user ? setUser(user) : setUser(null);
  });

  const routing = useRoute(user);
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
    <Provider store={store}>
      <NavigationContainer>
        {routing}
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
