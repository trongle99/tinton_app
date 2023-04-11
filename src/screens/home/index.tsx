import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';

const HomeScreen = ({navigation}: any) => {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Report"
    //     onPress={() => navigation.navigate('Report')}
    //   />
    //   <Button
    //     title="Go to Setting"
    //     onPress={() => navigation.navigate('Setting')}
    //   />
    // </View>
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header></Header>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
