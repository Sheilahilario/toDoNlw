import { styles } from './styles'
import { View, Image, TextInput, TouchableOpacity, Text  } from 'react-native'
import logoImage from '../../assets/Logo.png'
import { theme } from '../../theme'
import {MaterialCommunityIcons} from '@expo/vector-icons'


export function Header() {
  return (
    <View style={styles.headerContainer}>
    <Image source={logoImage}/>
    <View style={styles.form}>
       <TextInput style={styles.input} placeholder='Adicione uma nova tarefa'
       placeholderTextColor={theme.colors.base.gray300}
       /> 
       <TouchableOpacity style={styles.button}>
        <Text>
          <MaterialCommunityIcons
           name='plus-circle-outline' 
           size={22}
           color={theme.colors.base.gray100}
           /> 
          </Text>
       </TouchableOpacity>
      </View>  
    </View>
  )
}