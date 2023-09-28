// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput} placeholder='목표를 입력 해주세요.'/>
//         <Button title='목표추가'/>
//       </View>
//       <View>
//         <Text>목표 리스트</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//    padding: 50 
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '80%',
//     marginRight: 8,
//     padding: 8,
//   }
// });
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      padding: 50,
      flexDirection: 'row',
      width: '80%',
      height: 300,
      justifyContent: 'space-around',
      alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
