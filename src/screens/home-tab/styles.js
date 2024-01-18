import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingVertical: mvs(30),
    paddingHorizontal: mvs(20),
  },
  lan: {
    height: mvs(120),
    marginTop: mvs(20),
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: mvs(24),
  },
  totalMainContainer: {
    backgroundColor: colors.red,
    paddingBottom: mvs(10),
    borderRadius: mvs(20),
  },
  innerContainer: {
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(20),
    backgroundColor: colors.primary,
    borderRadius: mvs(20),
  },
  statusRow: {
    gap: mvs(10),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: mvs(5),
  },
  statusView: {
    width: mvs(20),
    height: mvs(10),
    backgroundColor: colors.red,
  },
  whiteStatusRow: {
    width: mvs(20),
    height: mvs(10),
    backgroundColor: colors.white,
  },

  customerContainer: {
    backgroundColor: colors.primary,
    width: '32%',
    alignItems: 'center',
    paddingTop: mvs(30),
    paddingBottom: mvs(40),
    borderRadius: mvs(10),
  },
  innerBodyMap: {
    width: '100%',
    height: mvs(100),
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(10),
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
