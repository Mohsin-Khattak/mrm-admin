import Header from 'components/atoms/header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
const HomeTab = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;

  const data = [
    {id: 1, title: 'Over All', total: '50'},
    {id: 2, title: 'To ab Delivered', total: '10'},
    {id: 3, title: 'In Transit', total: '15'},
    {id: 4, title: 'Completed', total: '20'},
    {id: 5, title: 'Delayed', total: '25'},
  ];
  const columns = 3;
  return (
    <View style={styles.container}>
      <Header title={t('Dashboard')} />
      <View style={styles.body}>
        <View style={styles.totalMainContainer}>
          <View style={styles.innerContainer}>
            <Row>
              <View>
                <Bold
                  fontSize={mvs(16)}
                  label={'Total Sales'}
                  color={colors.red}
                />
                <Bold
                  fontSize={mvs(18)}
                  color={colors.white}
                  label={'PKR 100,000'}
                />
                <Row style={styles.statusRow}>
                  <View style={styles.statusView} />
                  <Bold color={colors.red} label={'Pending'} />
                </Row>
                <Row style={styles.statusRow}>
                  <View style={styles.whiteStatusRow} />
                  <Bold color={colors.white} label={'Recovered'} />
                </Row>
              </View>
              <View></View>
            </Row>
          </View>
          <TouchableOpacity style={{paddingTop: mvs(10), alignSelf: 'center'}}>
            <Bold
              color={colors.white}
              fontSize={mvs(18)}
              label={'View Details'}
            />
          </TouchableOpacity>
        </View>
        <Bold
          style={{marginTop: mvs(20), fontSize: mvs(18)}}
          label={'Orders'}
        />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {data?.map(item => (
            <View
              key={item?.id}
              style={{
                width: `${100 / columns}%`,
                paddingVertical: mvs(10),
                paddingRight: mvs(10),
              }}>
              <View style={styles.innerBodyMap}>
                <Bold
                  style={{textAlign: 'center'}}
                  numberOfLines={2}
                  color={colors.white}
                  label={item?.title}
                />
                <Bold
                  style={{marginTop: mvs(10)}}
                  fontSize={mvs(16)}
                  label={item?.total}
                  color={colors.red}
                />
              </View>
            </View>
          ))}
        </View>
        <Row style={{marginTop: mvs(25)}}>
          <View style={styles.customerContainer}>
            <Bold color={colors.white} label={'Customers'} />
            <Bold
              style={{marginTop: mvs(10)}}
              color={colors.red}
              fontSize={mvs(22)}
              label={'200'}
            />
          </View>
          <View style={styles.customerContainer}>
            <Bold color={colors.white} label={'Salesmen'} />
            <Bold
              style={{marginTop: mvs(10)}}
              color={colors.red}
              fontSize={mvs(22)}
              label={'200'}
            />
          </View>
          <View style={styles.customerContainer}>
            <Bold color={colors.white} label={'Products'} />
            <Bold
              style={{marginTop: mvs(15)}}
              color={colors.red}
              fontSize={mvs(22)}
              label={'200'}
            />
          </View>
        </Row>
      </View>
    </View>
  );
};
export default HomeTab;
