import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function userInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() { 
    // setGoals([...goals, enteredGoal]);
    setGoals(currentGoals => [
      ...currentGoals,
      // {text: enteredGoal, key: Math.random().toString()}
      {text: enteredGoal, id: Math.random().toString()}
    ]);
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
      <FlatList 
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text}/>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} 
      /> 
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
  },
});
