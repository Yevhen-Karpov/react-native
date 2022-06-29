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
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { authSignUpUser } from "../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
  name: "",
};

export default function RegisterScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Photo.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={[
                styles.form,
                { position: "relative" },
                // { marginBottom: isShowKeyboard ? 20 : 100 }
              ]}
            >
              <View style={styles.photoContainer}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color="red"
                  style={styles.icon}
                />
              </View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>REGISTRATION</Text>
              </View>
              <View style={[styles.inputContainer, { width: dimensions }]}>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  placeholder="Enter your name"
                  value={state.name}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(name) => setState({ ...state, name })}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { width: dimensions, marginTop: 16 },
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  textAlign={"center"}
                  value={state.email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(email) => setState({ ...state, email })}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { width: dimensions, marginTop: 16 },
                ]}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
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
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>SIGN UP</Text>
              </TouchableOpacity>
              <Text style={styles.navTitle}>
                Already have an account?{" "}
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{ marginBottom: 45 }}
                >
                  <Text style={{ color: "#ff8c00" }}>Go to login</Text>
                </TouchableOpacity>
              </Text>

              {/* <Button
                onPress={() => navigation.navigate("Login")}
                title="go to login"
              /> */}
              <View style={styles.footer}>
                <View style={styles.footerIndicator}></View>
              </View>
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
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
    marginTop: 92,
  },
  headerTitle: {
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: 500,
    letterSpacing: 0.01,
  },
  inputTitle: {
    color: "#00ffff",
    fontSize: 30,

    marginBottom: 10,
    fontFamily: "Roboto",
    // textAlign: "center",
  },
  form: {
    flex: 1,
    height: 549,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    // marginBottom: isShowKeyboard ? 20 : 100,
  },
  photoContainer: {
    position: "absolute",
    top: -60,
    left: 144,
    right: 128,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    bottom: 14,
    right: -7,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
  inputContainer: {
    width: 343,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    padding: 16,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    placeholderTextColor: "#BDBDBD",
  },
  button: {
    width: 343,
    borderWidth: 1,
    // height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        borderColor: "#00ffff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  navTitle: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  footer: {
    height: 34,
    paddingHorizontal: 120,
    paddingTop: 21,
    paddingBottom: 8,
  },
  footerIndicator: {
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    borderRadius: 100,
  },
});
