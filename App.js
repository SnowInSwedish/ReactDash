import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [button1Count, setButton1Count] = useState(0);
  const [button2Count, setButton2Count] = useState(0);

  const handleButton1Press = () => {
    setButton1Count(button1Count + 1);
  };

  const handleButton2Press = () => {
    setButton2Count(button2Count + 1);
  };

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
        onPress={handleButton1Press}
      >
        <Text style={{ color: 'white' }}>Button 1 ({button1Count})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={handleButton2Press}
      >
        <Text style={{ color: 'white' }}>Button 2 ({button2Count})</Text>
      </TouchableOpacity>
      {/* Add more components for your dashboard */}
    </View>
  );
};

export default App;
