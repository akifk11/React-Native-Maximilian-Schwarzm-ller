import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}> 
     <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='enter'/>
          <Button title='add goal'/>
     </View>
     <View>
        <Text>List of goals...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  },
  inputContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth:2,
    borderBottomColor:"gray",
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    margin:8,
    padding:8,
    width: '80%',
  },

});
