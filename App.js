import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>aa</Text>
        <View>
        <Text>dd</Text>
        <Text>dd</Text>
        </View>
      <Text style={styles.myText}>안녕하세요</Text>
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
  myText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16
  }
});
