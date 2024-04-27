import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import CurrencyButton from './CurrencyButton';
import { currencyData } from './Currency';
import Snackbar from 'react-native-snackbar';

const MainComp = () => {

  const[value,setvalue] = useState()
  const[displayVal,setdisplayVal] = useState()

  const handlPress = (data) =>{
    if(!value){
      Snackbar.show({text: "NOt a valid number to convert",
      backgroundColor: "#F4BE2C",
      textColor: "#000000",
    duration : Snackbar.LENGTH_SHORT
    })
    }
    setdisplayVal(()=>{return data.symbol+' '+ data.value* value+''})
  }

  const handleChange = (e) => {
    setvalue(e)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Text style={styles.resultStyle}>{displayVal+' '}🤑</Text>
      <TextInput
      aria-label='₹'
      maxLength={14}
      keyboardType='number-pad'
      style={styles.inputStyle}
      placeholder='Enter Amount in ₹...'
      onChangeText={handleChange}
      />
      <FlatList
        data={currencyData}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={()=>handlPress(item)} style={styles.btnCont}>
            <CurrencyButton currencyData={item} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default MainComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    gap:50,
    padding:20,
    marginTop:100
  
  },
  btnCont: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    marginVertical: 8,
    height: 100,
    width:100,
    borderRadius: 15,
    margin:20,
    gap:5
  },
  inputStyle:{
    borderColor:'white',
    borderWidth:1,
    width:350,
    borderRadius:20
  },
  resultStyle:{
    fontSize:30
  }
});
