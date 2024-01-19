import AppHeader from 'components/atoms/header/appHeader';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import Bold from 'typography/bold-text';
import PrimaryInput from 'components/atoms/inputs';
import {Formik} from 'formik';
import {addCustomerFormValidation} from 'validations';
import {PrimaryButton} from 'components/atoms/buttons';
const AddCustomer = props => {
  const data = props.route?.params?.data;
  console.log('Item check===>', data);
  const {t} = i18n;
  const [loading, setLoading] = React.useState(true);
  const initialValues = {
    name: data?.name || '',
    phone: data?.phone || '',
    address: data?.address || '',
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
      <AppHeader title={data?.id ? 'Edit Cucstomer' : 'Add Customer'} />
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
                    marginTop: '20%',
                  }}>
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Name : *'}
                  />

                  <PrimaryInput
                    error={touched?.name ? t(errors.name) : ''}
                    placeholder={t('Enter Username')}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Mobile Number : *'}
                  />
                  <PrimaryInput
                    error={touched?.phone ? t(errors.phone) : ''}
                    placeholder={t('Enter Number')}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    containerStyle={{marginBottom: 0}}
                    errorStyle={{marginBottom: 0}}
                  />
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Address : *'}
                  />
                  <PrimaryInput
                    error={touched?.address ? t(errors.address) : ''}
                    placeholder={t('Enter Address')}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                    containerStyle={{marginBottom: 0}}
                    errorStyle={{marginBottom: 0}}
                  />
                </View>

                <PrimaryButton
                  containerStyle={{
                    borderRadius: mvs(10),
                    marginTop: mvs(50),
                    width: mvs(250),
                    alignSelf: 'center',
                  }}
                  // loading={loading}
                  onPress={handleSubmit}
                  title={data?.id ? 'Update Customer' : 'Add Customer'}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default AddCustomer;
