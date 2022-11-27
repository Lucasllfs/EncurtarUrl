import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';

import QRCode from 'react-native-qrcode-svg';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export default function Result({ route, navigation }) {
//https://www.globo.com
    const { shortUrl, otherParam } = route.params;
console.log(shortUrl)

const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Copiado! 👍',
      
    });
  }

const copyUrl = async () => {
    await Clipboard.setStringAsync(shortUrl);
    
};

  return (
    <View style = {styles.container}>
        <Text style = {styles.title} >{otherParam}</Text>
        <View style = {styles.card}>

       
        
       
    <View style = {styles.qrImg}> 
    
       <QRCode
        value={shortUrl ? shortUrl : 'NA'}
        size={270}
        color="white"
        backgroundColor="black"
        />
    
    </View>
    
        <TouchableOpacity 
        onPress={ shortUrl ? copyUrl && showToast : () => {}}
        >
        <View style={styles.bottom}>
        <Text style = {styles.short}>{shortUrl}</Text>
        <Feather name="copy" size={24} color="black" />
        </View>
        </TouchableOpacity>
    

    </View>

      
        
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor:'#181818'
        
    },
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 28,
        zIndex: 5,
        width: '85%',
        padding: 10
        
    },
    title:{
        fontWeight: '900',
        textAlign: 'left',
        fontSize: 60,
        lineHeight: 45,
        paddingTop: 50 ,
        position:'absolute',
        paddingBottom: 490,
        color: '#8758FF'
    },
    qrImg:{
        padding: 20

    },
    bottom:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    short:{
        fontWeight: '800',
        textAlign: 'center',
        fontSize: "20",
        paddingVertical: 25,
        marginHorizontal: 6

    }

})