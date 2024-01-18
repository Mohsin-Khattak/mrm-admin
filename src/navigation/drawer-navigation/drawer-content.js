import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';

const CustomDrawerContent = props => {
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
        style={{
          ...styles.buttonContainer,
          backgroundColor: colors.white,
        }}></TouchableOpacity>
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
    height: mvs(80),
    marginTop: mvs(30),
    borderTopRightRadius: mvs(40),
    borderBottomRightRadius: mvs(40),
    flexDirection: 'row',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    gap: mvs(20),
  },
});
