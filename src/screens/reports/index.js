import AppHeader from 'components/atoms/header/appHeader';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ScrollView, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
const Reports = props => {
  const {t} = i18n;
  const data = [
    {id: 1, name: 'Gold', price: '10000', items: '2'},
    {id: 2, name: 'Silver', price: '10000', items: '200'},
    {id: 3, name: 'Product', price: '10000', items: '2'},
    {id: 4, name: 'Potato', price: '10000', items: '2'},
  ];

  return (
    <View style={styles.container}>
      <AppHeader title={'Sales Report'} />
      <View style={styles.productMainContainer}>
        <Row style={styles.prdouctHeader}>
          <View style={{width: '35%'}}>
            <Bold color={colors.red} label={'Items'} />
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'Unit Sold'} />
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'Sales Amount'} />
          </View>
        </Row>
        <ScrollView>
          <View>
            <View style={styles.allProductContainer}>
              {data?.map(item => (
                <Row
                  key={item?.id}
                  style={{
                    width: '100%',
                    paddingVertical: mvs(5),
                  }}>
                  <View style={{width: '35%'}}>
                    <Bold
                      numberOfLines={2}
                      color={colors.primary}
                      label={item?.name}
                    />
                  </View>
                  <View style={{width: '33%', alignItems: 'center'}}>
                    <Bold
                      // style={{alignSelf: 'center'}}
                      fontSize={mvs(16)}
                      label={item?.items}
                      color={colors.primary}
                    />
                  </View>
                  <View style={{width: '33%', alignItems: 'center'}}>
                    <Bold
                      fontSize={mvs(16)}
                      label={item?.price}
                      color={colors.primary}
                    />
                  </View>
                </Row>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{paddingHorizontal: mvs(20)}}>
        <Row style={styles.footerContainer}>
          <View style={{width: '35%'}}>
            <Bold color={colors.red} label={'Total'} />
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'9'} />
          </View>
          <View style={{width: '33%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'50000'} />
          </View>
        </Row>
      </View>
    </View>
  );
};
export default Reports;
