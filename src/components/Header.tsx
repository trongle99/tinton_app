import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
          TinTon
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleClick}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,

    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
});
