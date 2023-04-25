import {Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    <SafeAreaView
      style={{flex: 1, position: 'relative', backgroundColor: '#fff'}}>
      {/* <Header /> */}

      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          height: 80,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={{
              uri: 'https://images.unsplash.com/photo-1681728934686-3401b91e82eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
            }}
          />
          <View>
            <Text style={{fontSize: 13, color: '#999999'}}>Xin chào,</Text>
            <Text style={{fontSize: 16, color: '#444549', fontWeight: 'bold'}}>
              Lê Minh Trọng
            </Text>
          </View>
        </View>

        <View>
          <Button title="Logout" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>

      <View
        style={{
          height: 180,
          display: 'flex',
          gap: 15,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, color: '#444549', fontWeight: 'bold'}}>
          Thu chi
        </Text>

        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              height: 110,
              backgroundColor: '#ff5e80',
              marginRight: 10,
              borderRadius: 10,
            }}>
            <Text>Icon</Text>
            <Text>Chi tiêu</Text>
            <Text>Số tiền chi tiêu</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 110,
              backgroundColor: '#58d68d',
              marginLeft: 10,
              borderRadius: 10,
            }}>
            <Text>Icon</Text>
            <Text>Thu nhập</Text>
            <Text>Số tiền thu nhập</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 1, paddingTop: 10}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            gap: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, color: '#444549', fontWeight: 'bold'}}>
            Lịch sử chi tiêu
          </Text>

          <View
            style={{
              flex: 1,
              display: 'flex',
              gap: 10,
            }}>
            {/* 1 */}
            <View
              style={{
                width: '100%',
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ccc',
                    borderRadius: 8,
                  }}>
                  <Text>A</Text>
                </View>
                <View>
                  <Text>Mua sắm</Text>
                  <Text>18/04/2023</Text>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                }}>
                <Text>- 100.000</Text>
                <Text>Mua sắm</Text>
              </View>
            </View>

            {/* 2 */}
            <View
              style={{
                width: '100%',
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ccc',
                    borderRadius: 8,
                  }}>
                  <Text>A</Text>
                </View>
                <View>
                  <Text>Mua sắm</Text>
                  <Text>18/04/2023</Text>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                }}>
                <Text>- 100.000</Text>
                <Text>Mua sắm</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 25,
            backgroundColor: 'blue',
          }}>
          <Text style={{color: '#fff'}}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
