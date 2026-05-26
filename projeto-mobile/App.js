import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from './src/layout/Cadastro'
import Login from './src/layout/Login'
import Inicio from './src/layout/Inicio'
import Configuracoes from './src/layout/Configuracoes'
import Denuncia from './src/layout/Denuncia'
import Botao from './src/layout/Botao'


// Criar a navegação
const Stack = createNativeStackNavigator();

//const LocalImage = () => (
//  <Image source={require('./assets/imageInit.png')} style={styles.image} />
//);

const Tela = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.imagemInicio} source={require('./src/assets/imageInit.png')} />
      <View>
        <Text style={styles.paragraph}>Criando novas oportunidades<Text style={{color:'#ff735c'}}>.</Text></Text>
      </View>

      <View style={styles.boxButtons}>
          <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Acessar conta</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonTransparent} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.buttonTextTransparent}>Cadastre-se</Text>
          </TouchableOpacity>
        </ View>
      </View>

    </View>
  );
}

export default function App() {
  return (
    // lista de navegação com todas as telas
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela">
        <Stack.Screen name="Tela inicial" component={Tela}  />
        <Stack.Screen name="Cadastro" component={Cadastro}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Inicio" component={Inicio}  />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="Denuncia" component={Denuncia} />
        <Stack.Screen name="Botao" component={Botao} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagemInicio: {
    width: '100%',
    height: 320,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  boxButtons:{
    gap: 10,
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#F47C7C',
  },
  buttonTransparent: {
    borderRadius: 30,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 600,
    textAlign: 'center',
    padding: 15,
    color:'#F8F7F2',
  },
  buttonTextTransparent: {
    fontWeight: 600,
    textAlign: 'center',
    padding: 15,
  }
});
