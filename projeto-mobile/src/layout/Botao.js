import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
} from 'react-native';
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Botao = ({ navigation }) => {
  const [fase, setFase] = useState('contagem');
  const [contador, setContador] = useState(5);
  const opacidade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fase !== 'contagem') return;

    if (contador === 0) {
      setFase('alerta');
      return;
    }

    Animated.sequence([
      Animated.timing(opacidade, { toValue: 0.2, duration: 200, useNativeDriver: true }),
      Animated.timing(opacidade, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => {
      setContador(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [contador, fase]);

  const handleCancelar = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
          style={styles.avatar}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logoImagem}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={28} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      {fase === 'contagem' ? (

        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Botão do pânico</Text>
          <Text style={styles.ativado}>Ativado</Text>

          <Animated.Text style={[styles.contador, { opacity: opacidade }]}>
            {contador}
          </Animated.Text>

          <Text style={styles.aviso}>Você tem alguns segundos para cancelar</Text>

          <TouchableOpacity style={styles.botaoCancelar} onPress={handleCancelar}>
            <Text style={styles.textoCancelar}>cancelar</Text>
          </TouchableOpacity>
        </View>

      ) : (

        <View style={styles.conteudo}>
          <Image
            source={require('../assets/alerta.png')}
            style={styles.imagemAlerta}
            resizeMode="contain"
          />

          <Text style={styles.alertaTitulo}>Alerta enviado</Text>

          <Text style={styles.alertaTexto}>
            A <Text style={styles.negrito}>polícia</Text> e seus contatos de emergência{'\n'}
            <Text style={styles.negrito}>Renata</Text> e <Text style={styles.negrito}>Aline</Text> foram acionados.
          </Text>

          <Image
            source={require('../assets/localizacao.png')}
            style={styles.mapa}
            resizeMode="cover"
          />

          <Text style={styles.alertaRodape}>
            A partir desse momento, seu áudio está sendo{'\n'}
            gravado para fins de segurança e provas.
          </Text>

          <Text style={styles.horario}>00:01</Text>
        </View>

      )}

      // Menu inferior 
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="home-outline" size={28} color="#404040" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Denuncia')}>
          <MaterialCommunityIcons name="message-alert-outline" size={28} color="#404040" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Botao')}>
          <View style={styles.botaoCentral}>
            <Ionicons name="warning" size={28} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#404040" />

        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
          <Ionicons name="settings-outline" size={28} color="#404040" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Botao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  // Header
  header: {
    marginTop: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 999,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImagem: {
    width: 130,
    height: 40,
  },

  // Conteúdo central
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 80,
    paddingTop: 20,
  },

  // Contagem
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  ativado: {
    fontSize: 14,
    color: '#FF725E',
    marginBottom: 40,
  },
  contador: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  aviso: {
    fontSize: 13,
    color: '#888',
    marginBottom: 32,
  },
  botaoCancelar: {
    backgroundColor: '#FF725E',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  textoCancelar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  // Alerta
  imagemAlerta: {
    width: 70,
    height: 70,
    marginBottom: 16,
  },
  alertaTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  alertaTexto: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  negrito: {
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  mapa: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 20,
  },
  alertaRodape: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
  },
  horario: {
    fontSize: 13,
    color: '#bbb',
  },

  // Menu inferior
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 82,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5DDD7',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  botaoCentral: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: '#E55050',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 6,
  },
});