import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Profile</Text>
      <Text>User: {user?.username}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
