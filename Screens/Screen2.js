import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const Screen2 = ({navigation}) => {

    
        return(
          <View style={styles.container}>
         <Button
      title="Regresar a home"
      onPress={() =>
        navigation.goBack()
      }
    />
        </View>
        )
    }


export default Screen2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });