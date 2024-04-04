import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Dashboard
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => {
          // Handle button press
        }}
      >
        <Text style={{ color: 'white' }}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => {
          // Handle button press
        }}
      >
        <Text style={{ color: 'white' }}>Button 2</Text>
      </TouchableOpacity>
      {/* Add more components for your dashboard */}
    </View>
  );
};


export default App;
