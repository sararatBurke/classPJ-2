import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View>
          <LinearGradient 
            colors={['#dbb73b', '#f2e4b7']} 
            style={styles.headBG}>
          {/******  Header ******/}
            <Text>Green Creative</Text>
            <Text>Inspired by Creative Commons, licensed under Creative Commons.</Text>
          </LinearGradient>
        </View>

        <View>
          {/******  Nav ******/}
          <LinearGradient
            colors={['#866e18', '#dab536']}
            style={styles.navBG}
          >
            <Text>home</Text>
            <Text>about</Text>
            <Text>portfolio</Text>
            <Text>prices</Text>
            <Text>products</Text>
            <Text>faq</Text>
            <Text>contact</Text>

          </LinearGradient>
        </View>

        <View>
          {/******  Body ******/}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#679159',
    alignItems: 'center',
    justifyContent: 'center',
  },

  border:{
    backgroundColor: 'rgba(250,250,250, 0.5)',
    padding: 12,
    borderRadius: 20,
    width: '80%',
    
  },
  headBG: {
    flex: 1,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navBG:{
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
