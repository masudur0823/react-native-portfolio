import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const description =
    "Hi, I'm Kazi Masudur Rahman. I am a professional Web Developer and expert in Frontend technology with 4 years experience.\n\nI know how to convert any design using React or React Native or Vue js or Angular . I am an expert on React js.\n\nI know how to convert any design using react or vue js or angular library. I also convert any design to raw code (HTML, CSS, Javascript, Bootstrap, Tailwind, Material UI) and integrate prebuild end API into the front end. I also have enough knowledge about the backend technology (Nodejs, MongoDB, Express js).";
  return (
    <View
      style={[
        styles.container,
        [{flex: 1, justifyContent: 'center', alignItems: 'center'}],
      ]}>
      <StatusBar animated={true} backgroundColor="#61dafb" />

      <Image style={styles.img} source={require('../assets/masud.png')} />
      <Text style={styles.title}>Masudur Rahman</Text>

      <ScrollView>
        <Text style={styles.desc}>{description}</Text>
      </ScrollView>
      <Button title="About Me" onPress={() => navigation.navigate('About')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  img: {
    width: '100%',
    height: 300,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    borderColor: '#61DAFB',
    objectFit: 'contain',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '600',
    color: '#61DAFB',
  },
  desc: {
    fontSize: 22,
    textDecorationStyle: 'dashed',
  },
});

export default Home;
