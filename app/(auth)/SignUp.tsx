import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@/data/Colors";
import TextInputField from "@/components/shared/TextInputField";
import Button from "@/components/shared/Button";
import * as ImagePicker from "expo-image-picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import axios from "axios"; 
import { useRouter } from "expo-router";

export default function SignUp() {
  const [ProfileImage, setProfileImage] = useState<string | undefined>();
  const [FullName, setFullName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onBtnPress = async () => {
    setErrorMessage(null); // Clear previous error messages

    if (!Email || !password || !FullName) {
      setErrorMessage("Please enter all details.");
      return;
    }

    try {
      // Register User in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, Email.trim(), password.trim());
      const user = userCredential.user;
      console.log(" Firebase Auth Success:", user.uid);

      let profileImageURL = null;

      // Upload Profile Image (if available)
      if (ProfileImage) {
        profileImageURL = ProfileImage;
      }

      // Send User Data to MySQL Backend
      const response = await axios.post("http://192.168.0.101:5000/register", {
        uid: user.uid,
        name: FullName.trim(),
        email: Email.trim(),
        profileImage: profileImageURL,
      });

      console.log(" MySQL Response:", response.data);
      router.push("/(auth)/SignIn"); //  Navigate to home screen after successful sign-up

    } catch (error: any) {
      console.error("Sign-Up Error:", error);

      let errorMsg = "Something went wrong!"; // Default error message

      if (error.response?.data?.error) {
        errorMsg = error.response.data.error; // API error message from backend
      } else if (error.code === "auth/email-already-in-use") {
        errorMsg = "This email is already registered. Try signing in.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Please enter a valid email address.";
      } else if (error.code === "auth/weak-password") {
        errorMsg = "Password must be at least 6 characters.";
      } else if (error.message) {
        errorMsg = error.message; // General error message
      }

      setErrorMessage(errorMsg); //  Show error in UI
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ paddingTop: 60, padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Create New Account</Text>

      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity onPress={pickImage}>
          {ProfileImage ? (
            <Image source={{ uri: ProfileImage }} style={styles.ProfileImage} />
          ) : (
            <Image source={require("@/assets/images/profile.png")} style={styles.ProfileImage} />
          )}
          <AntDesign
            name="camera"
            size={24}
            color={Colors.PRIMARY}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </TouchableOpacity>
      </View>

      <TextInputField label="Full Name" onChangeText={(v) => setFullName(v)} />
      <TextInputField label="College Email" onChangeText={(v) => setEmail(v)} />
      <TextInputField label="Password" onChangeText={(v) => setpassword(v)} password={true} />

      <Button text="Create Account" onPress={onBtnPress} />

      {/* Show error message in UI */}
      {errorMessage && (
        <Text style={{ color: "red", textAlign: "center", marginTop: 10, fontSize: 16 }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 99,
    marginTop: 20,
  },
});
