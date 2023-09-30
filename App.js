import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function userInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() { 
    // setGoals([...goals, enteredGoal]);
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
         style={styles.textInput}
         placeholder='목표를 입력 해주세요.'
         onChangeText={userInputHandler}
        />
        <Button 
         title='목표 추가'
         onPress={addGoalHandler}
        />
      </View>
      <View style={styles.listContainer}>
        {/* <Text>목표 리스트</Text> */}
        {goals.map((goal) =>  //  key 변경예정
          <Text key={goal}>
            {goal}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   padding: 50,
   paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 6
  }
});
