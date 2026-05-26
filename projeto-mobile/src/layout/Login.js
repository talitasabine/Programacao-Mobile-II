import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tela1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erros, setErros] = useState({ email: '', senha: '' });

  const validarCampos = () => {
    let errosTemp = {};
    if (!email) errosTemp.email = 'Digite seu email';
    if (!senha) errosTemp.senha = 'Digite uma senha';
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    if (validarCampos()) {
      const dados = {
        id: Math.floor(Math.random() * 10000) + '',
        email,
        senha,
      };
      try {
        await AsyncStorage.setItem(dados.id, JSON.stringify(dados), () => {
          console.warn('Dados salvos com sucesso!');
          navigation.navigate('Inicio');
        });
      } catch (error) {
        console.warn('Erro ao salvar os dados:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

   
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

  
        <Image
          source={require('../assets/login-icon.png.png')}
          style={styles.loginImage}
          resizeMode="contain"
        />

  
        <Text style={styles.subtitulo}>
          Bem vinda de volta!{'\n'}Continue sua jornada com a gente.
        </Text>

  
        <View style={styles.campoContainer}>
          <Text style={styles.label}>Seu email</Text>
          {erros.email !== '' && <Text style={styles.erro}>{erros.email}</Text>}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="email@hotmail.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={1000}
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.campoContainer}>
          <View style={styles.senhaHeader}>
            <Text style={styles.label}>Sua senha</Text>
            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
              <Text style={styles.ocultarTexto}>
                {senhaVisivel ? ' ocultar' : '👁 ocultar'}
              </Text>
            </TouchableOpacity>
          </View>
          {erros.senha !== '' && <Text style={styles.erro}>{erros.senha}</Text>}
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite uma senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!senhaVisivel}
            maxLength={15}
          />
        </View>

   
        <TouchableOpacity style={styles.esqueceuContainer}>
          <Text style={styles.esqueceuTexto}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      
        <Pressable style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Acessar conta</Text>
        </Pressable>

     
        <TouchableOpacity
          style={styles.semLoginContainer}
          onPress={() => navigation.navigate('Inicio')}
        >
          <Text style={styles.semLoginTexto}>Continue sem login</Text>
        </TouchableOpacity>

      
        <View style={styles.divider} />

       
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Não tem conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastreSeTexto}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Tela1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000', 
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Voltar
  backButton: {
    marginTop: 16,
    marginBottom: 8,
  },
  backArrow: {
    fontSize: 32,
    color: '#222',
    lineHeight: 36,
  },


  loginImage: {
    width: 200,
    height: 80,
    marginBottom: 16,
  },

  subtitulo: {
    fontSize: 15,
    color: '#333',
    marginBottom: 32,
    lineHeight: 22,
  },

  // Campos
  campoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
  },
  senhaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  ocultarTexto: {
    fontSize: 12,
    color: '#888',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 14,
    fontSize: 15,
    color: '#333',
  },
  erro: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },


  esqueceuContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  esqueceuTexto: {
    fontSize: 13,
    color: '#888',
  },


  button: {
    backgroundColor: '#F47C7C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },


  semLoginContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  semLoginTexto: {
    fontSize: 14,
    color: '#555',
  },

  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginBottom: 20,
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodapeTexto: {
    fontSize: 14,
    color: '#555',
  },
  cadastreSeTexto: {
    fontSize: 14,
    color: '#F47C7C',
    fontWeight: 'bold',
  },
});