import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';

const ReportScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header></Header>
    </SafeAreaView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({});
