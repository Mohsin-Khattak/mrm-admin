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
import {PrimaryButton} from 'components/atoms/buttons';
import {navigate} from 'navigation/navigation-ref';
const SalemanDetails = props => {
  return (
    <View style={styles.container}>
      <AppHeader title={'Salesman Details'} />
      <ScrollView style={{paddingHorizontal: mvs(20), marginBottom: mvs(20)}}>
        <View style={styles.detailContainer}>
          <Bold style={styles.title} label={'Name :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'Kashif Ali'}
            />
          </View>
          <Bold style={styles.title} label={'ID :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'F20yfh'}
            />
          </View>
          <Bold style={styles.title} label={'Designation :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'Jr. Manager'}
            />
          </View>
          <Bold style={styles.title} label={'Area :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'Lahore'}
            />
          </View>
          <Bold style={styles.title} label={'Contatct :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'03448422399'}
            />
          </View>
          <Bold style={styles.title} label={'Email :'} />
          <View style={styles.detailView}>
            <Medium
              color={colors.primary}
              fontSize={mvs(16)}
              label={'mohsinkhattak095@gmail.com'}
            />
          </View>
        </View>
        <Row style={{marginTop: mvs(30)}}>
          <PrimaryButton
            title="Block"
            textStyle={{color: colors.red}}
            containerStyle={{width: '48%', height: mvs(40)}}
          />
          <PrimaryButton
            onPress={() => navigate('AddSaleman')}
            title="Edit"
            containerStyle={{width: '48%', height: mvs(40)}}
          />
        </Row>
      </ScrollView>
    </View>
  );
};
export default SalemanDetails;
