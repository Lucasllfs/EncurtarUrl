import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
        Text, 
        View, 
        TextInput, 
        TouchableOpacity, 
        Keyboard, 
        TouchableWithoutFeedback} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Fontisto, FontAwesome5 } from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [url, setUrl] = useState('');
  const [name, setName] = useState('')
  const [urlTitle, setUrlTitle] = useState('')
  const [urlFinal, setUrlFinal] = useState('')

  const short = async () => {

    if(url.includes('https://') || url.includes('http://')){

      await fetch (`https://cutt.ly/api/api.php?key=e04db6973246b418b6371bce1a6f2bcd&short=${url}&name=${name}`)
      
      .then(async response => {
        const data = await response.json()

        if (data.url.status === 2){
          alert('url invalida')
          return
        }
        
        Keyboard.dismiss()

        if (data.url.status != 3  ) {
        setUrlFinal(data.url.shortLink)
        setUrlTitle(data.url.title)
        console.log('urlsalva')
        }

        next()

      })
    }
  }


  const next = () => {

    navigation.navigate('Result', {
      shortUrl: urlFinal,
      otherParam: urlTitle,
    })
    
  }


  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>

        <View style={styles.icon}>
          <FontAwesome5 name="link" size={200} color="#8758FF" />
        </View>

        <StatusBar style='light'  />

        <View style={styles.inputsCard}>
          <TextInput style={styles.urlInput}
            onChangeText={(texto) => setUrl(texto)}
            value={url}
            placeholder="Digite a url"
          />

          <TextInput style={styles.urlInput}
            onChangeText={(texto) => setName(texto)}
            value={name}
            placeholder="Nome personalizado"
          />
        </View>
          
        <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
          <Text style ={{ color: '#FFF', fontWeight: '900', fontSize: 18}} > Encurtar </Text>
          <Fontisto name="broken-link" size={20} color="white" />
        </TouchableOpacity>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    position: 'absolute',
    paddingBottom: 450,
    justifyContent: 'flex-start',
    paddingRight: 150,
  },  
  inputsCard:{
    width: '90%',
    paddingVertical:5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    zIndex: 5
  },  
  urlInput:{
    height: 55,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F2F2F2",
    marginVertical: 20,
    fontSize:20,  
  },
  shortBtn:{
    flexDirection: 'row',
    backgroundColor: '#8758FF',
    borderRadius: 25,
    height: 50,
    width: '40%',
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },


});
