import AppHeader from 'components/atoms/header/appHeader';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import Bold from 'typography/bold-text';
import PrimaryInput, {InputWithIcon} from 'components/atoms/inputs';
import {Formik} from 'formik';
import {addCustomerFormValidation} from 'validations';
import {PrimaryButton} from 'components/atoms/buttons';
const AddProduct = props => {
  const data = props.route?.params?.data;

  const products = [
    {id: 1, title: 'Oil'},
    {id: 2, title: 'Drink'},
  ];

  const {t} = i18n;
  const [product, setProduct] = useState(data?.type); // Initial value can be set as needed

  const [loading, setLoading] = React.useState(true);
  const initialValues = {
    name: data?.name || '',
    price: data?.price || '',
    type: data?.type || '',
  };

  const handleChangeDesignation = newDesignation => {
    setProduct(newDesignation);
  };
  const handleFormSubmit = async () => {
    try {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log('fcmToken=>', fcmToken);
          // dispatch(onLogin({ ...values, token: fcmToken }, setLoading, props));
          resetStack('Drawer');
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log('error=>', error);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title={data?.id ? 'Edit Product' : 'Add Product'} />
      <View>
        <KeyboardAvoidScrollview>
          <Formik
            initialValues={initialValues}
            validationSchema={addCustomerFormValidation}
            onSubmit={handleFormSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              touched,
              values,
              errors,
            }) => (
              <>
                <View
                  style={{
                    backgroundColor: colors.primary,
                    width: '100%',
                    paddingVertical: mvs(20),
                    paddingHorizontal: mvs(20),
                    borderRadius: mvs(20),
                    marginTop: '10%',
                  }}>
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Name : *'}
                  />

                  <PrimaryInput
                    error={touched?.name ? t(errors.name) : ''}
                    placeholder={t('Enter Productname')}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />

                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Price: *'}
                  />
                  <PrimaryInput
                    error={touched?.price ? t(errors.price) : ''}
                    placeholder={t('Enter Price')}
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.price}
                    containerStyle={{marginBottom: 0}}
                    errorStyle={{marginBottom: 0}}
                  />

                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Select type: *'}
                  />
                  <InputWithIcon
                    error={touched?.type ? t(errors.type) : ''}
                    items={products}
                    onChangeText={handleChangeDesignation}
                    value={product}
                    id={product}
                  />
                </View>

                <PrimaryButton
                  containerStyle={{
                    borderRadius: mvs(10),
                    marginTop: mvs(50),
                    marginBottom: mvs(60),
                    width: mvs(250),
                    alignSelf: 'center',
                  }}
                  // loading={loading}
                  onPress={handleSubmit}
                  title={data?.id ? 'Update Product' : 'Add Product'}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default AddProduct;
