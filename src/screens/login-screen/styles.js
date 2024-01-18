import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {height, mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flex: 1,
    marginTop: mvs(50),
  },
  backgroundImage: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  loginmoverstext: {alignSelf: 'center', marginBottom: mvs(10)},
  contentContainerStyleNew: {
    flexGrow: 1,
    // paddingHorizontal: mvs(20),
    marginHorizontal: mvs(20),
    marginVertical: mvs(10),
    paddingVertical: mvs(20),
    backgroundColor: colors.white,
    bottom: mvs(30),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: mvs(6),
  },

  keyboradscrollcontent: {
    paddingHorizontal: mvs(20),
    flexGrow: 0,
    paddingBottom: mvs(20),
  },

  forgotpasswordview: {
    alignSelf: 'flex-start',
    marginBottom: mvs(15),
    marginTop: mvs(10),
  },
});
export default styles;
