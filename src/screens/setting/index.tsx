import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header></Header>
      <View
        style={{
          height: 80,
          backgroundColor: '#eeeeee',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 20,
        }}>
        <Text>Avatar</Text>
        <View>
          <Text style={{fontSize: 16, fontWeight: '500'}}>User name</Text>
          <Text style={{fontSize: 13}}>test@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
