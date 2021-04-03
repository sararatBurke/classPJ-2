import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.head}>
            {/****-----------  Header -----------******/}
          <LinearGradient 
            colors={['#dbb73b', '#f2e4b7']}
            style={styles.headBG}>
        
            <Text style={styles.headText}>Green Creative</Text>
            <Text style={styles.subHead}>Inspired by Creative Commons, licensed under Creative Commons.</Text>
          </LinearGradient>
        </View>

        <View style={styles.nav}>
          {/******-----------  Nav  -----------******/}
          <LinearGradient
            colors={['#866e18', '#dab536']}
            style={styles.navBG}>
            <Text style={styles.navText}>home</Text>
            <Text style={styles.navText}>about</Text>
            <Text style={styles.navText}>portfolio</Text>
            <Text style={styles.navText}>prices</Text>
            <Text style={styles.navText}>products</Text>
            <Text style={styles.navText}>faq</Text>
            <Text style={styles.navText}>contact</Text>

          </LinearGradient>
        </View>

        <View style={styles.body}>
          {/******-----------  Body  -----------******/}
          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
          <Text style={styles.bodyHead}>Template Usage</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy `:)`</Text>
            <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
            
            <TouchableOpacity style={styles.link}><Text>read more</Text></TouchableOpacity>

          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
            <Text style={styles.bodyHead}>Another Title Goes Here!</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>This particular template goes not have a naviagation panel; it was intended for simple sites. I am also making a version of this template with navigation, check out BryantSmith.com to get it.</Text>
            
            <TouchableOpacity style={styles.link}><Text>read more</Text></TouchableOpacity>

          <LinearGradient colors={['#eaf0e7','#fbfcfb']} style={styles.bodyHeadBG}>
            <Text style={styles.bodyHead}>Yet Another?</Text>
          </LinearGradient>
            <Text style={styles.bodyText}>Each title is an H1 tag, so choose them carefully `:)`</Text>
        </View>
      </View>
    </View>
  );
}
const styles = ScaledSheet.create({
// const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#679159',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: '10@s',
  },
  border:{
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
    padding: '6@s',
    borderRadius: '15@s',
    width: '450@ms' 
  },

  head: {
    height: '100@msr0.2',
  },
  headBG: {
    padding: '10@s',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headText:{
    fontFamily: 'Arial',
    fontSize: '17@s',
    fontWeight: 'bold',
    color: '#283823'
  },
  subHead:{
    fontFamily: 'Helvetica',
    fontSize: '7.7@s',
    fontWeight: 'bold',
    color:'#679159'

  },

  nav:{
    height: '50@ms0.1',
  },
  navBG:{
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }, 
  navText:{
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '7@s'
  },

  body:{
    backgroundColor: '#fff',
    borderBottomLeftRadius: '10@s',
    borderBottomRightRadius: '10@s',
    padding: '7@s',  
  },

  bodyHeadBG:{
    height: '30@ms0.3',
    paddingHorizontal: '7@s',
    paddingVertical: '3@s',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  bodyHead:{
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: '8@s',
  },
  bodyText:{
    fontFamily: 'Trebuchet MS',
    fontSize: '6@s',
    lineHeight: '12@s',
    marginTop: '2@s',
    marginBottom: '12@s',
  },
  link: {
    fontFamily: 'Trebuchet MS',
    fontSize: '6@s',
    marginBottom: '10@s',
  },

  
});
