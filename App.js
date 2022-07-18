import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>

      <StatusBar style='light' />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          cardStyle: {backgroundColor:'#3f2f25'}
          
          }
        }>
          <Stack.Screen name='MealsCatogries'
           component={CategoriesScreen}
           options={{ title: 'All Categories',
             }} />
          <Stack.Screen name='MealsOverview'
           component={MealsOverviewScreen} 
          
             />
             <Stack.Screen name='MealDetail' component={MealsDetailScreen} />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f'
  },
});
