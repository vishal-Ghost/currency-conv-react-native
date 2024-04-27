import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CurrencyButton = ({currencyData}) => {
  return (
    <>
      <Text style={styles.flagStyle}>{currencyData.flag}</Text>
      <Text style={styles.nameStyle}>{currencyData.name}</Text>
    </>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
  nameStyle:{
    color:'black',
    fontSize:15
  },
  flagStyle : {
    fontSize:20
  }
})