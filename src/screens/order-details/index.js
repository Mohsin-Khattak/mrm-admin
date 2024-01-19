import {PrimaryButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/header/appHeader';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ScrollView, View} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import styles from './styles';
import CustomMap from 'components/atoms/custom-map';

const OrderDetails = props => {
  const data = [
    {id: 1, name: 'Gold', price: '10000', items: '2'},
    {id: 2, name: 'Silver', price: '10000', items: '2'},
    {id: 3, name: 'Product', price: '10000', items: '2'},
    {id: 4, name: 'Potato', price: '10000', items: '2'},
  ];
  return (
    <View style={styles.container}>
      <AppHeader title={'Order Details'} />
      <View style={styles.body}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.detailContainer}>
            <Bold style={styles.title} label={'Order ID :'} />
            <View style={styles.detailView}>
              <Medium
                color={colors.primary}
                fontSize={mvs(16)}
                label={'Kashif Ali'}
              />
            </View>
            <Bold style={styles.title} label={'Customer Name :'} />
            <View style={styles.detailView}>
              <Medium
                color={colors.primary}
                fontSize={mvs(16)}
                label={'Kashif Ali'}
              />
            </View>
            <Bold style={styles.title} label={'Products :'} />
            <View style={styles.productMainContainer}>
              <Row style={styles.prdouctHeader}>
                <View style={{width: '33%'}}>
                  <Bold color={colors.white} label={'Name'} />
                </View>
                <View style={{width: '33%', alignItems: 'center'}}>
                  <Bold color={colors.white} label={'Items'} />
                </View>
                <View style={{width: '33%'}}>
                  <Bold color={colors.white} label={'Price'} />
                </View>
              </Row>
              <View style={styles.allProductContainer}>
                {data?.map(item => (
                  <Row
                    key={item?.id}
                    style={{
                      width: '100%',
                      paddingVertical: mvs(5),
                      // alignItems: 'center',
                    }}>
                    <View style={{width: '33%'}}>
                      <Bold
                        numberOfLines={2}
                        color={colors.black}
                        label={item?.name}
                      />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                      <Bold
                        // style={{alignSelf: 'center'}}
                        fontSize={mvs(16)}
                        label={item?.items}
                        color={colors.red}
                      />
                    </View>
                    <View style={{width: '33%'}}>
                      <Bold
                        fontSize={mvs(16)}
                        label={item?.price}
                        color={colors.red}
                      />
                    </View>
                  </Row>
                ))}
              </View>
              <Row style={styles.footerContainer}>
                <View style={{width: '33%'}}>
                  <Bold color={colors.primary} label={'Total Price'} />
                </View>
                <View style={{width: '33%', alignItems: 'center'}}>
                  <Bold color={colors.red} label={'9'} />
                </View>
                <View style={{width: '33%'}}>
                  <Bold color={colors.red} label={'50000'} />
                </View>
              </Row>
            </View>

            <Bold style={styles.title} label={'Saleman Name :'} />
            <View style={styles.detailView}>
              <Medium
                color={colors.primary}
                fontSize={mvs(16)}
                label={'Mohsin Khattak'}
              />
            </View>
            <Bold style={styles.title} label={'Order Location :'} />
            <View
              style={{
                width: '100%',
                height: mvs(150),
                marginTop: mvs(10),
              }}>
              <CustomMap />
            </View>
          </View>
        </ScrollView>
      </View>

      <Row style={{paddingHorizontal: mvs(20), marginBottom: mvs(20)}}>
        <PrimaryButton
          textStyle={{color: colors.red}}
          title="Cancle"
          containerStyle={{width: '32%', height: mvs(40)}}
        />
        <PrimaryButton
          textStyle={{color: colors.green}}
          title="Approve"
          containerStyle={{width: '32%', height: mvs(40)}}
        />
        <PrimaryButton
          textStyle={{color: colors.yellow}}
          title="Dispatch"
          containerStyle={{width: '32%', height: mvs(40)}}
        />
      </Row>
    </View>
  );
};
export default OrderDetails;
