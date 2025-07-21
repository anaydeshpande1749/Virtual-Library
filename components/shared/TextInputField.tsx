import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/data/Colors";

type TextInputFieldProps = {
  label: string,
  onChangeText: (text: string) => void,
  password?: boolean
};
export default function TextInputField({
  label,
  onChangeText,
  password = false,
}: TextInputFieldProps) {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Text
        style={{
          color: Colors.NAVY,
        }}
      >
        {label}
      </Text>
      <TextInput
        placeholder={label}
        style={styles.TextInput}
        secureTextEntry={password}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    padding: 8,
    borderWidth: 0.2,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 17,
  },
});
