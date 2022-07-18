import React from 'react';
import {Pressable,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




function IconButton({color,icon,onPress,padding}){
    return <Pressable  onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <Icon name={icon} size={24} color={color} />
        

    </Pressable>
}
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity:0.7
    }

}) 