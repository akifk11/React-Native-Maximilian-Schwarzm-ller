import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blockBlue}>
        <Text style={styles.textColor}>1</Text>
      </View>
      <View style={styles.blockRed}>
        <Text style={styles.textColor}>2</Text>
      </View>
      <View style={styles.blockGreen}>
        <Text style={styles.textColor}>3</Text>
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"row",
    },
    blockBlue:{
      backgroundColor:"blue", 
      width:100,
      height:100,  
      justifyContent:"center",
      alignItems:"center",
    },
    blockRed:{
      backgroundColor:"red",   
      width:100,
      height:100,  
      justifyContent:"center",
      alignItems:"center",
    },
    blockGreen:{
      backgroundColor:"green",   
      width:100,
      height:100,  
      justifyContent:"center",
      alignItems:"center",
    },
    textColor:{
      color:"white",
    }


});
