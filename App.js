import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>aa</Text>
        <View>
        <Text>dd</Text>
        <Text>dd</Text>
        </View>
      <Text>aa</Text>
      <Button title="클릭" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
