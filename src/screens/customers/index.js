import {EmptyList} from 'components/atoms/empty-list';
import AppHeader from 'components/atoms/header/appHeader';
import CustomersCard from 'components/molecules/customers-card';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import {SearchInput} from 'components/atoms/inputs';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
const Customers = props => {
  const {t} = i18n;
  const [loading, setLoading] = React.useState(true);
  const data = [
    {
      id: 1,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 4,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 5,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 6,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
    {
      id: 7,
      title: 'Alernative Snacks',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww',
    },
    {
      id: 8,
      title: 'Candy',
      image:
        'https://w0.peakpx.com/wallpaper/768/855/HD-wallpaper-breads-bakery-graphy-food-healthy-bread-thumbnail.jpg',
    },
    {
      id: 9,
      title: 'Candy',
      image:
        'https://media.istockphoto.com/id/1442992545/photo/homemade-feta-cheese-puff-muffins-with-spinach-closeup-in-the-maffin-pan-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=OHf1oe8pnfmdIMsB68QvCm4Z0uC2WfBd15S_ATWL65A=',
    },
  ];
  const renderCarItem = ({item, index}) => (
    <CustomersCard
      item={item}
      onEdit={() => navigate('AddCustomer', {item: item})}
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
