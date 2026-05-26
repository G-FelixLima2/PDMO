import { View, Text, Image, StyleSheet, TextInput} from "react-native"
import { Button2 } from "@/components/button"

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.div1}>
        <Text style={style.text}> Palpite </Text>
        <Image source={require('@/components/copa.jpg')} style={style.img} />
      </View>
      <TextInput placeholder="Seu nome?" style={style.input} />
      <TextInput placeholder="Qual seleção será campeã da copa?" style={style.input} />

      <Button2 title="Enviar Palpite" onPress={() => console.log('Palpite enviado, começe a rezar')} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  div1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginBottom: 35,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  input: {
    width: 250,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'center',

    marginBottom: 20,
    padding: 2,
  },
})