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
const AddSaleman = props => {
  const data = props.route?.params?.data;

  const desig = [
    {id: 1, title: 'Manager'},
    {id: 2, title: 'Assistant'},
    {id: 3, title: 'Jr Assistant'},
  ];
  const {t} = i18n;
  const [loading, setLoading] = React.useState(true);
  const initialValues = {
    name: data?.name || '',
    phone: data?.phone || '',
    address: data?.address || '',
    id: data?.id || '',
    email: data?.email || '',
    designation: data?.designation || designations,
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
  const [designations, setDesignation] = useState(data?.designation); // Initial value can be set as needed

  const handleChangeDesignation = newDesignation => {
    setDesignation(newDesignation);
  };

  return (
    <View style={styles.container}>
      <AppHeader title={data?.id ? 'Edit Saleman' : 'Add Saleman'} />
      <View>
        <KeyboardAvoidScrollview showsVerticalScrollIndicator={false}>
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
                    label={'Enter ID: *'}
                  />
                  <PrimaryInput
                    error={touched?.id ? t(errors.id) : ''}
                    placeholder={t('Enter ID')}
                    onChangeText={handleChange('id')}
                    onBlur={handleBlur('id')}
                    value={values.id}
                    containerStyle={{marginBottom: 0}}
                    errorStyle={{marginBottom: 0}}
                  />
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Enter Email: *'}
                  />
                  <PrimaryInput
                    error={touched?.email ? t(errors.email) : ''}
                    placeholder={t('Enter Email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    containerStyle={{marginBottom: 0}}
                    errorStyle={{marginBottom: 0}}
                  />
                  <Bold
                    style={{paddingVertical: mvs(10)}}
                    color={colors.white}
                    label={'Select Designation: *'}
                  />
                  <InputWithIcon
                    error={touched?.designation ? t(errors.designation) : ''}
                    items={desig}
                    onChangeText={handleChangeDesignation}
                    value={designations}
                    id={designations}
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
                    containerStyle={{marginBottom: 20}}
                    errorStyle={{marginBottom: 0}}
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
                  title={data?.id ? 'Update Saleman' : 'Add Saleman'}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default AddSaleman;
