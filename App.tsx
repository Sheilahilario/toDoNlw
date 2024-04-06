import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'
import { theme } from './src/theme';
import { HomeScreen } from './src/screens';
import { Loading } from './src/components/Loading';

export default function App() {
   const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_700Bold
   })

  return (
    <View style={styles.container}> 
      {fontsLoaded ?  <HomeScreen/> : <Loading />}
      <StatusBar  
				backgroundColor="transparent"
				translucent/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
