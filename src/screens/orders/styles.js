import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    // paddingVertical: mvs(10),
  },

  btn: {
    width: '48%',
    borderWidth: mvs(1),
    borderColor: colors.primary,
    height: mvs(40),
  },
  contentContainerStyle: {
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(20),
  },
});
export default styles;
