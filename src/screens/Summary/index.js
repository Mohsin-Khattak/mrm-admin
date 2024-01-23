import AppHeader from 'components/atoms/header/appHeader';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ScrollView, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
import Medium from 'typography/medium-text';
const Summary = props => {
  const {t} = i18n;
  const data = [
    {id: 1, name: 'Gold', price: '10000', items: '2'},
    {id: 2, name: 'Silver', price: '10000', items: '200'},
    {id: 3, name: 'Product', price: '10000', items: '2'},
    {id: 4, name: 'Potato', price: '10000', items: '2'},
  ];

  return (
    <View style={styles.container}>
      <AppHeader title={'Areawise Recovery'} />
      <View style={{paddingHorizontal: mvs(20)}}>
        <View
          style={{
            paddingVertical: mvs(15),
            paddingHorizontal: mvs(10),
            backgroundColor: colors.primary,
            borderRadius: mvs(10),
          }}>
          <Bold color={colors.red} fontSize={mvs(18)} label={'Summary'} />
          <Row
            style={{
              justifyContent: 'flex-start',
              gap: mvs(20),
              marginTop: mvs(5),
            }}>
            <View style={{width: mvs(150)}}>
              <Medium label={'Total Sales'} color={colors.white} />
            </View>
            <Medium label={'1000'} color={colors.white} />
          </Row>
          <Row style={{justifyContent: 'flex-start', gap: mvs(20)}}>
            <View style={{width: mvs(150)}}>
              <Medium label={'Total Recovery'} color={colors.white} />
            </View>
            <Medium label={'1000'} color={colors.white} />
          </Row>
          <Row style={{justifyContent: 'flex-start', gap: mvs(20)}}>
            <View style={{width: mvs(150)}}>
              <Medium label={'Total Balance'} color={colors.white} />
            </View>
            <Medium label={'500'} color={colors.white} />
          </Row>
        </View>
      </View>
      <View style={styles.productMainContainer}>
        <Row style={styles.prdouctHeader}>
          <View style={{width: '25%'}}>
            <Bold color={colors.red} label={'Location'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'sales'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'Recovery'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'Balance'} />
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
                  <View style={{width: '25%'}}>
                    <Bold
                      numberOfLines={2}
                      color={colors.primary}
                      label={item?.name}
                    />
                  </View>
                  <View style={{width: '25%', alignItems: 'center'}}>
                    <Bold
                      fontSize={mvs(16)}
                      label={item?.items}
                      color={colors.primary}
                    />
                  </View>
                  <View style={{width: '25%', alignItems: 'center'}}>
                    <Bold
                      fontSize={mvs(16)}
                      label={item?.price}
                      color={colors.primary}
                    />
                  </View>
                  <View style={{width: '25%', alignItems: 'center'}}>
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
          <View style={{width: '25%'}}>
            <Bold color={colors.red} label={'Total'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'9'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'50000'} />
          </View>
          <View style={{width: '25%', alignItems: 'center'}}>
            <Bold color={colors.red} label={'50000'} />
          </View>
        </Row>
      </View>
    </View>
  );
};
export default Summary;
