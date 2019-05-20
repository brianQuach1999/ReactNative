import React, { Component } from 'react';
import * as firebase from 'firebase';
import {StyleSheet,Text,FlatList, View, Image } from 'react-native';

// const firebaseConfig = {
//   apiKey: "AIzaSyCRAQes_Yo9TTuVNTVSb2noJ-AoPYPlg3w",
//   authDomain: "learning-ff77b.firebaseapp.com",
//   databaseURL: "https://learning-ff77b.firebaseio.com",
//   projectId: "learning-ff77b",
//   storageBucket: "learning-ff77b.appspot.com",
//   messagingSenderId: "1034621457190",
//   appId: "1:1034621457190:web:815ccda2615ac0f6"
// };

// firebase.initializeApp(firebaseConfig);
// <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to us https://firebase.google.com/docs/web/setup#config-web-app -->

  var firebaseConfig = {
    apiKey: "AIzaSyCRAQes_Yo9TTuVNTVSb2noJ-AoPYPlg3w",
    authDomain: "learning-ff77b.firebaseapp.com",
    databaseURL: "https://learning-ff77b.firebaseio.com",
    projectId: "learning-ff77b",
    storageBucket: "learning-ff77b.appspot.com",
    messagingSenderId: "1034621457190",
    appId: "1:1034621457190:web:88c936f5ed71edb8"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
// var storageRef = storage.ref();
// var im1= storage.refFromURL("https://firebasestorage.googleapis.com/v0/b/learning-ff77b.appspot.com/o/1.webp?alt=media&token=cc9ece68-61b2-4bb1-bdca-e2249660a2ad)");
var im1 = storage.refFromURL("gs://learning-ff77b.appspot.com")
var im2= storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/learning-ff77b.appspot.com/o/2.png?alt=media&token=0b9b0d95-7517-4c06-95b0-4938cff45e76');
var im3= storage.ref('3.png');
var im4= storage.ref('4.png');
var im5= storage.ref('5.png');

// var gs1 = storage.refFromURL(im1.toString())
// console.log("gs1: "+ gs1)
let img1url;
let img2url;

console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

im1.child('1.webp').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  // var img = document.getElementById('myimg');
  // img.src = url;
  var img = document.getElementById('myimg');
  img.src = url;

  img1url = url.toString();
  console.log("img1url: "+ img1url);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}).catch(function(error) {
  // Handle any errors
});

im2.child('2.png').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  // var img = document.getElementById('myimg');
  // img.src = url;
  img2url = url;
  console.log("img1ur2: "+ img2url);

}).catch(function(error) {
  // Handle any errors
});

// setTimeout(function(){}, 3000);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image source={{uri:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg'}} 
        style={{flex:1, width: '100%', height: 180}}/>

        <Image source={{uri:img1url}} style={{flex:1, width: '100%', height: 180}}/>
        <Image source={{uri:img2url}} style={{flex:1, width: '100%', height: 180}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
