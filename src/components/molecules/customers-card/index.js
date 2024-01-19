import React from 'react';

import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomersCard = ({item, onEdit}) => {
  return (
    <View style={styles.container}>
      <Row
        style={{
          alignItems: 'center',
        }}>
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: mvs(10),
          }}>
          <AntDesign name="user" size={25} color={colors.red} />
          <Bold fontSize={mvs(18)} color={colors.white} label={item?.name} />
        </Row>
        <TouchableOpacity onPress={onEdit}>
          <FontAwesome5 name="user-edit" size={25} color={colors.red} />
        </TouchableOpacity>
      </Row>
      <View style={styles.numberContainer}>
        <Regular color={colors.black} label={item?.phone} />
      </View>
      <View style={styles.numberContainer}>
        <Regular numberOfLines={3} color={colors.black} label={item.address} />
      </View>
    </View>
  );
};

export default CustomersCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: mvs(20),
    paddingHorizontal: mvs(10),
    marginTop: mvs(15),
    borderRadius: mvs(20),
  },
  numberContainer: {
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
    marginTop: mvs(10),
    borderRadius: mvs(10),
  },
});
