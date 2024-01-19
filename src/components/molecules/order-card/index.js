import React from 'react';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Bold from 'typography/bold-text';
const OrdersCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Row style={styles.innerRow}>
        <View style={{width: '50%'}}>
          <Medium label={'Order ID # 20208'} color={colors.red} />
          <Bold
            style={{marginVertical: mvs(2)}}
            label={'Kashif Ali'}
            color={colors.white}
            fontSize={mvs(15)}
          />
          <Medium label={'25-02-2024'} color={colors.red} />
        </View>
        <View>
          <Medium label={'Total'} color={colors.red} />
          <Bold
            style={{marginVertical: mvs(2)}}
            label={'Rs 36000'}
            color={colors.white}
            fontSize={mvs(15)}
          />
          <Medium label={'Status: Pending '} color={colors.red} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default OrdersCard;
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
    gap: mvs(10),
    // marginTop: mvs(15),
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
