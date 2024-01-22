import {EmptyList} from 'components/atoms/empty-list';
import AppHeader from 'components/atoms/header/appHeader';
import {SearchInput} from 'components/atoms/inputs';
import ProductsCard from 'components/molecules/products-card';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
const Products = props => {
  const {t} = i18n;
  const [loading, setLoading] = React.useState(true);
  const data = [
    {
      id: 1,
      name: 'Alernative Snacks',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 2,
      name: 'Candy',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 3,
      name: 'Alernative Snacks',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 4,
      name: 'Candy',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 5,
      name: 'Alernative Snacks',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 6,
      name: 'Candy',
      price: '5000',
      type: 'Oil',
    },
    {
      id: 7,
      price: '5000',
      name: 'Alernative Snacks',
      type: 'Oil',
    },
    {
      id: 8,
      name: 'Candy',
      type: 'Oil',
    },
  ];
  const renderCarItem = ({item, index}) => (
    <ProductsCard
      item={item}
      onEdit={() => navigate('AddProduct', {data: item})}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader title={'Products'} add onAdd={() => navigate('AddProduct')} />
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
export default Products;
