import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='목표를 입력 해주세요.'/>
        <Button title='목표추가'/>
      </View>
      <View>
        <Text>목표 리스트</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   padding: 50 
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  }
});
