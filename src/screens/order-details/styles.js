import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  detailContainer: {
    backgroundColor: colors.primary,
    padding: mvs(10),
    paddingVertical: mvs(20),
    marginTop: mvs(20),
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
  body: {
    flex: 1,
    backgroundColor: colors.primary,
    marginBottom: mvs(20),
    paddingHorizontal: mvs(20),
    marginHorizontal: mvs(20),
    borderRadius: mvs(20),
  },
  productMainContainer: {
    backgroundColor: colors.white,
    marginTop: mvs(10),
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
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
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(5),
    borderTopWidth: mvs(1),
  },
});
export default styles;
