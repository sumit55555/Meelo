import { View, Text, Pressable, Image, StyleSheet,onPress } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native';
import MealDetail from "./MealDetails";
function MealItem({ id,title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        }
    
        );
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
              style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}
              onPress={selectMealItemHandler}
            >

                <View >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    </View>
                <MealDetail duration={duration}
                            affordability={affordability}
                            complexity={complexity}
                            />
                </View>
            
            </Pressable>
        </View>
    );
}
export default MealItem;
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8

    },
    buttonPressed: {
        opacity: 0.5,
      },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {

        marginHorizontal: 4,
        fontSize: 12,


    },
});