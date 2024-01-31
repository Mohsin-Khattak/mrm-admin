import {LoginBackground, loginIcon, splash} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {Formik, useFormik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import {colors} from 'config/colors';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {signinFormValidation} from 'validations';
import styles from './styles';
const ForgotPassword = props => {
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const initialValues = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: signinFormValidation,
      onSubmit: () => {},
    });
  const handleFormSubmit = async () => {
    try {
      // dispatch(onLogin({ ...values, token: fcmToken }, setLoading, props));
    } catch (error) {
      console.log('error=>', error);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={LoginBackground}>
        <View style={{flex: 1}}>
          <Image source={loginIcon} style={styles.backgroundImage} />
          <View style={styles.contentContainerStyle}>
            <View style={styles.contentContainerStyleNew}>
              <KeyboardAvoidScrollview
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.keyboradscrollcontent}>
                <Image
                  style={{
                    width: mvs(100),
                    height: mvs(100),
                    alignSelf: 'center',
                  }}
                  source={splash}
                />
                <Bold
                  label={t('Forgot Password')}
                  color={colors.primary}
                  fontSize={mvs(18)}
                  style={styles.loginmoverstext}
                />
                <Formik
                  initialValues={initialValues}
                  validationSchema={signinFormValidation}
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
                      {console.log('errror2', errors)}
                      <PrimaryInput
                        keyboardType={'email-address'}
                        error={touched?.email ? t(errors.email) : ''}
                        placeholder={t('Enter Username')}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />

                      <PrimaryButton
                        containerStyle={{
                          borderRadius: mvs(10),
                        }}
                        loading={loading}
                        onPress={handleSubmit}
                        title={t('Send')}
                      />
                      <TouchableOpacity
                        style={styles.forgotpasswordview}
                        onPress={() => navigate('ForgotPasswordScreen')}>
                        <Medium
                          label={t('Back to  Login ?')}
                          style={{
                            textDecorationLine: 'underline',
                            color: colors.red,
                          }}
                        />
                      </TouchableOpacity>
                    </>
                  )}
                </Formik>
              </KeyboardAvoidScrollview>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ForgotPassword;
