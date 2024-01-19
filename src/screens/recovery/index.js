import {EmptyList} from 'components/atoms/empty-list';
import AppHeader from 'components/atoms/header/appHeader';
import {SearchInput} from 'components/atoms/inputs';
import RecoveryCard from 'components/molecules/recovery-card';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
const Recovery = props => {
  const {t} = i18n;
  const [loading, setLoading] = React.useState(true);
  const data = [
    {
      id: 1,
      name: 'Alernative Snacks',
      address: 'Lahore',
      phone: '03448422399',
    },
    {
      id: 2,
      name: 'Candy',
      address: 'Karachi',
      phone: '03448422399',
    },
    {
      id: 3,
      name: 'Alernative Snacks',
      address: 'Lahore',
      phone: '03448422399',
    },
    {
      id: 4,
      name: 'Candy',
      phone: '03448422399',
      address: 'Karachi',
    },
    {
      id: 5,
      name: 'Alernative Snacks',
      phone: '03448422399',
      address: 'Lahore',
    },
    {
      id: 6,
      name: 'Candy',
      phone: '03448422399',
      address: 'Karachi',
    },
    {
      id: 7,
      phone: '03448422399',
      name: 'Alernative Snacks',
      address: 'Lahore',
    },
    {
      id: 8,
      name: 'Candy',
      address: 'Karachi',
    },
  ];
  const renderCarItem = ({item, index}) => (
    <RecoveryCard
      item={item}
      onPress={() => navigate('RecoveryDetail', {data: item})}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader title={'Recovery'} />
      <View style={{height: mvs(50), paddingHorizontal: mvs(20)}}>
        <SearchInput
          // onChangeText={onChangeText}
          placeholder={'Search'}
          mtop={0}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={
            !loading && <EmptyList label={'You have no recovery yet'} />
          }
          showsVerticalScrollIndicator={false}
          data={data || []}
          renderItem={renderCarItem}
        />
      </View>
    </View>
  );
};
export default Recovery;
