import React from 'react';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
const RecoveryCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Row style={styles.innerRow}>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="account-details"
            size={20}
            color={colors.red}
          />
        </View>
        <Row style={styles.detailRow}>
          <Medium color={colors.primary} label={'Name :'} />
          <Medium color={colors.primary} label={'Kashif Ali'} />
        </Row>
      </Row>
      <Row style={styles.innerRow}>
        <View style={styles.iconView}>
          <FontAwesome name="dollar" size={15} color={colors.red} />
        </View>
        <Row style={styles.detailRow}>
          <Medium color={colors.primary} label={'Total :'} />
          <Medium color={colors.primary} label={'50000 Rs'} />
        </Row>
      </Row>
      <Row style={styles.innerRow}>
        <View style={styles.iconView}>
          <FontAwesome name="dollar" size={15} color={colors.red} />
        </View>
        <Row style={styles.detailRow}>
          <Medium color={colors.primary} label={'Recovered :'} />
          <Medium color={colors.primary} label={'24000 Rs'} />
        </Row>
      </Row>
      <Row style={styles.innerRow}>
        <View style={styles.iconView}>
          <FontAwesome name="dollar" size={15} color={colors.red} />
        </View>
        <Row style={styles.detailRow}>
          <Medium color={colors.primary} label={'Balance :'} />
          <Medium color={colors.primary} label={'26000 Rs'} />
        </Row>
      </Row>
      <Row style={styles.innerRow}>
        <View style={styles.iconView}>
          <Fontisto name="date" size={15} color={colors.red} />
        </View>
        <Row style={styles.detailRow}>
          <Medium color={colors.primary} label={'Date :'} />
          <Medium color={colors.primary} label={'05-08-2024'} />
        </Row>
      </Row>
    </TouchableOpacity>
  );
};

export default RecoveryCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: mvs(20),
    paddingLeft: mvs(10),
    marginTop: mvs(15),
    borderRadius: mvs(20),
    paddingRight: mvs(3),
  },
  numberContainer: {
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
    marginTop: mvs(10),
    borderRadius: mvs(10),
  },
  innerRow: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: mvs(20),
    marginTop: mvs(15),
  },
  iconView: {
    width: mvs(25),
    height: mvs(25),
    borderRadius: mvs(12),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailRow: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
    gap: mvs(10),
    paddingHorizontal: mvs(10),
    borderTopLeftRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
    paddingVertical: mvs(5),
  },
});
