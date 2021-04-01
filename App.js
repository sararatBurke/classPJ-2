import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View>
          <LinearGradient 
            colors={['#dbb73b', '#f2e4b7']} 
            style={styles.headBG}>
          {/******  Header ******/}
            <Text style={styles.headText}>Green Creative</Text>
            <Text style={styles.subHead}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
          </LinearGradient>
        </View>

        <View>
          {/******  Nav ******/}
          <LinearGradient
            colors={['#866e18', '#dab536']}
            style={styles.navBG}>
            <Text>home</Text>
            <Text>about</Text>
            <Text>portfolio</Text>
            <Text>prices</Text>
            <Text>products</Text>
            <Text>faq</Text>
            <Text>contact</Text>

          </LinearGradient>
        </View>

        <View style={styles.bodyGB}>
          {/******  Body ******/}
          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
          <Text style={styles.bodyHead}>Template Usage</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy `:)`</Text>
            <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
            
            <TouchableOpacity>
              <Text>read more</Text>
            </TouchableOpacity>
          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
            <Text style={styles.bodyHead}>Another Title Goes Here!</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
            
            <TouchableOpacity>
              <Text>read more</Text>
            </TouchableOpacity>
          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
            <Text style={styles.bodyHead}>Yet Another?</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>Each title is an H1 tag, so choose them carefully `:)`</Text>
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
  headText:{
    fontFamily: 'Arial',
    fontSize: 37,
    fontWeight: 'bold',
    color: '#283823'
  },
  subHead:{
    fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: 'bold',
    color:'#679159'

  },

  bodyGB:{
    backgroundColor: '#fff',
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  bodyHeadBG:{
    flex:1,
    paddingHorizontal:18,
    paddingVertical: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bodyHead:{
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bodyText:{
    fontFamily: 'Verdana',
    fontSize: 12,
    lineHeight: 25,
    marginTop: 5,
    marginBottom: 20,
  },

  navBG:{
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
