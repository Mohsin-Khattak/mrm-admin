import {
  customer,
  customerActive,
  home,
  homeActive,
  logout,
  logoutActive,
  order,
  orderActive,
  recovery,
  recoveryActive,
  report,
  reportActive,
} from 'assets/images';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';

const CustomDrawerContent = props => {
  const [active, setActive] = useState('home');
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <View style={styles.drawerheader}>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
            }}
            style={styles.drawerman}
          />
        </View>
        <Medium
          label={'Kashif Ali'}
          fontSize={mvs(18)}
          color={colors.white}
          style={{marginTop: mvs(6)}}
        />
        <Medium
          label={'demo@gmail.com'}
          fontSize={mvs(18)}
          color={colors.white}
          style={{marginTop: mvs(6)}}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          setActive('home');
          navigate('HomeTab');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'home' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'home' ? homeActive : home}
        />
        <Bold
          color={active == 'home' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Home'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('order');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'order' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'order' ? orderActive : order}
        />
        <Bold
          color={active == 'order' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Orders'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('recovery');
          navigate('Recovery');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'recovery' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'recovery' ? recoveryActive : recovery}
        />
        <Bold
          color={active == 'recovery' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Recovery'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('customer');
          navigate('Customers');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'customer' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'customer' ? customerActive : customer}
        />
        <Bold
          color={active == 'customer' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Customers'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('report');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'report' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'report' ? reportActive : report}
        />
        <Bold
          color={active == 'report' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Reports'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('signout');
        }}
        style={{
          ...styles.buttonContainer,
          backgroundColor: active == 'signout' ? colors.white : colors.primary,
        }}>
        <Image
          style={{width: mvs(40), height: mvs(40)}}
          source={active == 'signout' ? logoutActive : logout}
        />
        <Bold
          color={active == 'signout' ? colors.primary : colors.white}
          fontSize={mvs(22)}
          label={'Sign Out'}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: mvs(60),
    borderBottomRightRadius: mvs(60),
  },
  header: {
    alignItems: 'center',
    marginTop: mvs(40),
  },
  drawerman: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(50),
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: mvs(60),
    marginTop: mvs(30),
    borderTopRightRadius: mvs(40),
    borderBottomRightRadius: mvs(40),
    flexDirection: 'row',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    gap: mvs(20),
    alignItems: 'center',
  },
});
