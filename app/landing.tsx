import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/data/Colors";
import Button from "@/components/shared/Button";
import { router, useRouter } from "expo-router";

export default function landing() {
  const route = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/HomeWrapper.jpg")}
        style={{
          width: "100%",
          height: 470,
        }}
      />
      <View
        style={{
          padding: 15,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            color: Colors.NAVY,
          }}
        >
          Welcome to Virtual Library
        </Text>

        <Button
          text="Get Started"
          onPress={() => router.push("./(auth)/SignUp")}
        />

        <Pressable onPress={() => router.push("./(auth)/SignIn")}>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: Colors.NAVY,
              marginTop: 10,
            }}
          >
            Already have an Account? Sign-In here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
