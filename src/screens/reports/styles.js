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
    width: '50%',
    borderWidth: mvs(1),
    borderColor: colors.primary,
    height: mvs(40),
  },
  contentContainerStyle: {
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(20),
  },
  productMainContainer: {
    backgroundColor: colors.white,
    marginTop: mvs(10),
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
    flex: 1,
  },
  prdouctHeader: {
    backgroundColor: colors.primary,
    marginTop: mvs(10),
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(5),
    borderRadius: mvs(10),
  },
  allProductContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    marginTop: mvs(10),
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
  },
  footerContainer: {
    borderTopColor: colors.primary,
    marginTop: mvs(10),
    // paddingHorizontal: mvs(10),
    paddingVertical: mvs(5),
    borderTopWidth: mvs(1),
    marginBottom: mvs(20),
  },
});
export default styles;
