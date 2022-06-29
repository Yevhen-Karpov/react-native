import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    setPhoto(photo.uri);
  };
  console.log(location);
  const sendPhoto = () => {
    navigation.navigate("DefaulScreen", { photo });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  let text = "Waiting..";
  if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create</Text>
      </View>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.photo} />
          </View>
        )}
        <TouchableOpacity style={styles.touchContainer} onPress={takePhoto}>
          <Text>
            {/* <MaterialIcons name="photo-camera" size={50} color="white" /> */}
            Click to take a photo
          </Text>
        </TouchableOpacity>
      </Camera>
      <View style={styles.textContainer}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={sendPhoto}>
        <Text style={styles.sendText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  camera: {
    height: 240,
    // marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  touchContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffe0",
    borderWidth: 1,
    borderColor: "#ff0000",
  },
  photoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 200,
    height: 200,
  },
  sendButton: {
    width: 343,
    backgroundColor: "#FF6C00",
  },
  sendText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
