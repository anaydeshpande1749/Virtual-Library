import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import TextInputField from "@/components/shared/TextInputField";
import Button from "@/components/shared/Button";
import Colors from "@/data/Colors";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const router = useRouter();
  const [Email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSignInBtnClick = async () => {
    setErrorMessage(null); // Clear previous error messages

    if (!Email || !password) {
      setErrorMessage("Please enter Email & Password.");
      return;
    }

    try {
      const resp = await signInWithEmailAndPassword(auth, Email, password);
      if (resp.user) {
        console.log("Login successful for:", resp.user?.email);
        router.push("/homepage");  // Navigates to the "Home" tab

      }
    } catch (error: any) {
      console.error("Firebase Auth Error:", error.code, error.message);

      let errorMsg = "Authentication failed. Please try again.";
      if (error.code === "auth/invalid-credential") {
        errorMsg = "Invalid Email or Password.";
      } else if (error.code === "auth/user-not-found") {
        errorMsg = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMsg = "Incorrect password. Try again.";
      }

      setErrorMessage(errorMsg);
    }
  };

  return (
    <View style={{ padding: 10, paddingTop: 50 }}>
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/VlibLogo_rounded.png")}
          style={{ width: "100%", height: 200 }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign In to Virtual Library</Text>
      </View>

      <TextInputField label="College Email" onChangeText={(v) => setEmail(v)} />
      <TextInputField label="Password" password={true} onChangeText={(v) => setpassword(v)} />

      <Button text="Sign In" onPress={onSignInBtnClick} />

      {/*Show error message in UI */}
      {errorMessage && (
        <Text style={{ color: "red", textAlign: "center", marginTop: 10, fontSize: 16 }}>
          {errorMessage}
        </Text>
      )}

      <Pressable onPress={() => router.push("/(auth)/SignUp")}>
        <Text style={{ fontSize: 16, textAlign: "center", color: Colors.NAVY, marginTop: 10 }}>
          New to Virtual Library? Create a New Account Here
        </Text>
      </Pressable>
    </View>
  );
}
