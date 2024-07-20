import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, List } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        About This App
      </Text>
      <Text style={styles.text}>
        Welcome to the Stock Tracker App! This application allows you to view
        and track stock prices and their changes.
      </Text>

      <Text variant="titleLarge" style={styles.title}>
        Developers
      </Text>
      <List.Section>
        <List.Item
          title="Shivam Sharma"
          description="Lead Developer"
          left={() => <List.Icon icon="account" />}
        />
        {/* Add more developers as needed */}
      </List.Section>

     
     
      <Text style={styles.text}>
        Location: 39 Woodsview Avenue, Toronto - M9W 6B9, ON
      </Text>
      <Text style={styles.text}>
        Contact: +16476178560
      </Text>
      <Text style={styles.text}>
        Email: shivamrsharma8560@gmail.com
      </Text>
      <Text style={styles.text}>
        Website: www.shivamsharma.net
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent:"space-evenly"
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
});
