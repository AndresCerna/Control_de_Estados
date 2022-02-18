/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { Text, View, StyleSheet, Button } from 'react-native';
 
 const styles = {
     fontSize: 40,
 }

  const NuevoComponente = props => {
    return <Text style={styles}>{props.title}</Text>;
  };5
  
  const LotsOfGreetings = () => {
    const[contador, setcontador] = useState(0);
    const[Minutos, setMinutos] = useState(0);
    useEffect(()=>{
      const interval = setInterval(() =>{
          setcontador(contador + 1);
          if (contador > 58){
            setMinutos(Minutos + 1);
            setcontador(0);
            }
        },1000);
        return () => clearInterval(interval);
  }); 

  let Segundos = `${contador}`, Minutos1 = `${Minutos}`;
  if(contador < 10 ){Segundos = `0${contador}`;}
  if(contador < 10 ){Minutos1 = `0${Minutos}`;}
  const Formato =`${Minutos1}:${Segundos}`;
  return(
  <View>
  <NuevoComponente title={Formato}/>
</View>
  )};
 export default LotsOfGreetings;