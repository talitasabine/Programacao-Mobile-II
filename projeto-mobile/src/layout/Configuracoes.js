import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const App = ({ navigation }) => {

  const ItemMenu = ({ icone, titulo }) => (
    <Pressable style={styles.itemMenu}>
      <View style={styles.itemContainer}>
        {icone}
        <Text style={styles.itemTexto}>{titulo}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 130,
          paddingHorizontal: 22,
          paddingTop: 18,
        }}
      >

        {/* HEADER */}
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
            <Feather name="menu" size={34} color="#111" />
          </TouchableOpacity>
        </View>

        {/* TÍTULO */}
        <View style={styles.tituloContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={34}
              color="#222222"
            />
          </TouchableOpacity>
          <Text style={styles.titulo}>Configurações</Text>
        </View>

        {/* SEARCH */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Pesquisar"
              placeholderTextColor="#9A9A9A"
              style={styles.input}
            />
            <Feather name="search" size={20} color="#9A9A9A" />
          </View>
        </View>

        {/* CONTA */}
        <Text style={styles.secaoTitulo}>Conta</Text>

        <ItemMenu
          titulo="Dados Pessoais"
          icone={<Feather name="user" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Permissões"
          icone={<Ionicons name="shield-checkmark-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Desativar Conta"
          icone={<Feather name="user-x" size={20} color="#3B3B3B" />}
        />

        <View style={styles.divisor} />

        {/* GERAL */}
        <Text style={styles.secaoTitulo}>Geral</Text>

        <ItemMenu
          titulo="Fontes"
          icone={<FontAwesome5 name="font" size={17} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Linguagem"
          icone={<Ionicons name="language-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Aparência"
          icone={<Ionicons name="moon-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Notificações"
          icone={<Ionicons name="notifications-outline" size={20} color="#3B3B3B" />}
        />

        <View style={styles.divisor} />

        {/* SEGURANÇA */}
        <Text style={styles.secaoTitulo}>Segurança e privacidade</Text>

        <ItemMenu
          titulo="Modo Camuflado"
          icone={<Ionicons name="eye-off-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Bloqueio do App"
          icone={<Ionicons name="lock-closed-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Registros de Atividades"
          icone={<Ionicons name="document-text-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Recursos de Emergência"
          icone={<Ionicons name="warning-outline" size={20} color="#3B3B3B" />}
        />

        <View style={styles.divisor} />

        {/* AJUDA */}
        <Text style={styles.secaoTitulo}>Ajuda e Suporte</Text>

        <ItemMenu
          titulo="Termos de Uso"
          icone={<Ionicons name="document-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Aviso de Privacidade"
          icone={<Ionicons name="shield-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Cookies"
          icone={<Ionicons name="settings-outline" size={20} color="#3B3B3B" />}
        />
        <ItemMenu
          titulo="Sair"
          icone={<Ionicons name="log-out-outline" size={20} color="#3B3B3B" />}
        />

        <Text style={styles.versao}>App version 1.0</Text>

      </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="home-outline" size={28} color="#404040" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Denuncia')}>
          <MaterialCommunityIcons name="message-alert-outline" size={28} color="#404040"/>
        </TouchableOpacity>

        <View style={styles.botaoCentral}>
          <Ionicons name="warning" size={28} color="#FFFFFF" />
        </View>

        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#404040" />

        <Ionicons name="settings-outline" size={28} color="#E07A63" />

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F6F3',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 120,
    height: 32,
  },

  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 22,
  },

  titulo: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1F1F1F',
    marginLeft: 2,
  },

  searchRow: {
    marginBottom: 28,
  },

  searchBox: {
    height: 58,
    backgroundColor: '#EFEFEF',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#222222',
    fontWeight: '500',
  },

  secaoTitulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F1F1F',
    marginBottom: 16,
  },

  itemMenu: {
    marginBottom: 18,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemTexto: {
    marginLeft: 14,
    fontSize: 17,
    color: '#3A3A3A',
    fontWeight: '500',
  },

  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: '#D6CEC8',
    marginVertical: 24,
  },

  versao: {
    textAlign: 'center',
    marginTop: 20,
    color: '#9A9A9A',
    fontSize: 14,
    fontWeight: '500',
  },

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

export default App;