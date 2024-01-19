import AppHeader from 'components/atoms/header/appHeader';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native';
import {mvs} from 'config/metrices';
import Bold from 'typography/bold-text';
import {colors} from 'config/colors';
import Medium from 'typography/medium-text';
import {Row} from 'components/atoms/row';
import {Image} from 'react-native';
const RecoveryDetail = props => {
  return (
    <View style={styles.container}>
      <AppHeader title={'Recovery Details'} />
      <ScrollView style={{paddingHorizontal: mvs(20), marginBottom: mvs(20)}}>
        <View style={styles.detailContainer}>
          <Bold style={styles.title} label={'Customer Name :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'Kashif Ali'}
            />
          </View>
          <Bold style={styles.title} label={'Total Amount :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'25,000'}
            />
          </View>
          <Bold style={styles.title} label={'Recovered :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'25,000'}
            />
          </View>
          <Bold style={styles.title} label={'Balance :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'25,000'}
            />
          </View>
          <Bold style={styles.title} label={'Date :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'05-08-2024'}
            />
          </View>
          <Row style={{marginTop: mvs(30)}}>
            <View style={{width: '48%', alignItems: 'center'}}>
              <Bold
                label={'Reciept :'}
                color={colors.white}
                fontSize={mvs(18)}
              />
              <Image
                style={{width: '100%', height: mvs(200), marginTop: mvs(10)}}
                source={{
                  uri: 'https://storage.googleapis.com/support-forums-api/attachment/thread-151949760-12927169851677489027.jpg',
                }}
              />
            </View>
            <View style={{width: '45%', alignItems: 'center'}}>
              <Bold
                label={'Bank Slip :'}
                color={colors.white}
                fontSize={mvs(18)}
              />
              <Image
                style={{width: '100%', height: mvs(200), marginTop: mvs(10)}}
                source={{
                  uri: 'https://storage.googleapis.com/support-forums-api/attachment/thread-151949760-12927169851677489027.jpg',
                }}
              />
            </View>
          </Row>
        </View>
      </ScrollView>
    </View>
  );
};
export default RecoveryDetail;
