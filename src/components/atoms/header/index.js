import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import {Row} from '../row';
import {navigate} from 'navigation/navigation-ref';
import {menuIcon, menue} from 'assets/images';
const Header = ({style = {}, mtop = 0, title, menu = true, ...props}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center'}}>
        {menu ? (
          <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
            <Image
              style={{width: mvs(25), height: mvs(25)}}
              source={menuIcon}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Bold fontSize={mvs(20)} label={title} style={[styles.title]} />
        <View style={styles.empty} />
      </Row>
    </View>
  );
};
export default React.memo(Header);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: mvs(22),
    paddingVertical: mvs(15),
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
    color: colors.primary,
  },
  back: {},
});
