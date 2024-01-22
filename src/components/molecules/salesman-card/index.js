import React from 'react';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';

const SalemanCard = ({item, onEdit, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
          <AntDesign name="user" size={30} color={colors.red} />
          <View>
            <Medium color={colors.white} label={'ID# 56YHVH'} />
            <Bold
              style={{marginTop: mvs(5)}}
              fontSize={mvs(18)}
              color={colors.white}
              label={item?.name}
            />
          </View>
        </Row>
        <TouchableOpacity onPress={onEdit}>
          <FontAwesome5 name="user-edit" size={25} color={colors.red} />
        </TouchableOpacity>
      </Row>
    </TouchableOpacity>
  );
};

export default SalemanCard;
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
