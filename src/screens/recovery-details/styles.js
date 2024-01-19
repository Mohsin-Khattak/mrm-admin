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
  detailContainer: {
    backgroundColor: colors.primary,
    padding: mvs(10),
    paddingVertical: mvs(20),
    marginTop: mvs(40),
    borderRadius: mvs(20),
  },
  detailView: {
    backgroundColor: colors.white,
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(5),
    marginTop: mvs(10),
    borderRadius: mvs(10),
  },
  title: {
    color: colors.white,
    fontSize: mvs(16),
    marginTop: mvs(10),
  },
});
export default styles;
