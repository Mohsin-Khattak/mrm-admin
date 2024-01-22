import React from 'react';

import {giftHand} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';

const ProductsCard = ({item, onEdit}) => {
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
          <Image source={giftHand} style={{width: mvs(30), height: mvs(30)}} />
          <Bold fontSize={mvs(18)} color={colors.white} label={item?.name} />
        </Row>
        <TouchableOpacity onPress={onEdit}>
          <MaterialCommunityIcons
            name="archive-edit-outline"
            size={30}
            color={colors.red}
          />
        </TouchableOpacity>
      </Row>
      <View style={styles.numberContainer}>
        <Regular color={colors.black} label={`Price: Rs ${item?.price}`} />
      </View>
      <View style={styles.numberContainer}>
        <Regular
          numberOfLines={3}
          color={colors.black}
          label={`Product Type: ${item.type}`}
        />
      </View>
    </View>
  );
};

export default ProductsCard;
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
