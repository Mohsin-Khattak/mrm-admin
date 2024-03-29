import {EmptyList} from 'components/atoms/empty-list';
import AppHeader from 'components/atoms/header/appHeader';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import {SearchInput} from 'components/atoms/inputs';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import CustomersCard from 'components/molecules/customer-card';
const Customers = props => {
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
    <CustomersCard
      item={item}
      onEdit={() => navigate('AddCustomer', {data: item})}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader
        title={'Customers'}
        add
        onAdd={() => navigate('AddCustomer')}
      />
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
            !loading && <EmptyList label={'You have no customers yet'} />
          }
          showsVerticalScrollIndicator={false}
          data={data || []}
          renderItem={renderCarItem}
        />
      </View>
    </View>
  );
};
export default Customers;
