import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '150%',
    height: 173,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  form: {
    marginTop: 10,
    height: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '50%',
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 5,
    color: theme.colors.base.gray100,
    padding: 16,
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.regular,
    marginRight: 4,
    marginTop: 130,
    borderColor: theme.colors.base.gray700,
    borderWidth: 1,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 90,
    marginTop: 130,
  },
})