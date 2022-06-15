import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addListener("change", onChange);
    return () => {
      Dimensions.removeListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/kenny-eliason-OjxsirfohHU-unsplash.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  value={state.email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(email) => setState({ ...state, email })}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(password) => setState({ ...state, password })}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={{ marginTop: 20 }}
              >
                <Text style={styles.navTitle}>go to register</Text>
              </TouchableOpacity>
              {/* <Button
                onPress={() => navigation.navigate("Register")}
                title="go to register"
              /> */}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>

        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  headerTitle: {
    fontSize: 30,
    color: "#00ffff",
    fontFamily: "Roboto",
  },
  inputTitle: {
    color: "#00ffff",
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "Roboto",
    // textAlign: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00ffff",
    color: "#00ffff",
    height: 40,
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#00ffff",
      },
      android: {
        backgroundColor: "#00ffff",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  navTitle: {
    color: "#006400",
    fontSize: 20,
  },
});
