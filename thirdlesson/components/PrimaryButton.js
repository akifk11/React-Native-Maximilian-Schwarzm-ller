import {View,Text,Pressable,StyleSheet} from "react-native";

function PrimaryButton({children,onPress}) {
  
    return (
        <View style={styles.buttonOuterContainer} >
        <Pressable  
        onPress={onPress}
        style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer } 
        android_ripple={{color:"#640233"}}>
            <Text style={styles.textContainer}>{children}</Text>
        </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",
    },
    buttonInnerContainer:{
        backgroundColor:"#72063c",
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
    },
    textContainer:{
        color:"white",
        textAlign:"center",
    },
    pressed:{
        opacity:0.75,
    }
})
