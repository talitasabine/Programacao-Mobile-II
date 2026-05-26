import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';

import {
  Ionicons,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const boletins = [
  {
    id: '1',
    protocolo: '24542249',
    data: '12/11/2025',
  },
  {
    id: '2',
    protocolo: '24542250',
    data: '15/11/2025',
  },
  {
    id: '3',
    protocolo: '24542251',
    data: '18/11/2025',
  },
];

const denuncias = [
  {
    id: '1',
    protocolo: '24542249',
    data: '12/11/2025',
  },
  {
    id: '2',
    protocolo: '24542250',
    data: '15/11/2025',
  },
];

export default function Denuncia({ navigation }) {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>Protocolo</Text>

      <Text style={styles.cardNumero}>
        {item.protocolo}
      </Text>

      <Text style={styles.cardData}>
        data: {item.data}
      </Text>

      <TouchableOpacity style={styles.botaoVisualizar}>
        <Text style={styles.textoVisualizar}>
          Visualizar
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
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
            <Ionicons
              name="notifications-outline"
              size={28}
              color="#222"
            />
          </TouchableOpacity>

        </View>

        {/* PESQUISA */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Pesquisar serviços"
              placeholderTextColor="#8E8E93"
              style={styles.input}
            />
            <Feather name="search" size={22} color="#666" />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Feather name="sliders" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* TITULO */}
        <View style={styles.tituloContainer}>

          <Text style={styles.titulo}>
            Denúncia
          </Text>

          <Ionicons
            name="help-circle"
            size={24}
            color="#F27D7D"
          />

        </View>

        {/* BOTÕES */}
        <View style={styles.botoesContainer}>

          <TouchableOpacity style={styles.botaoAtivo}>
            <Text style={styles.textoBotaoAtivo}>
              Registrar BO
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoInativo}>
            <Text style={styles.textoBotaoInativo}>
              Medida protetiva
            </Text>
          </TouchableOpacity>

        </View>

        {/* BOLETINS */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Boletim de ocorrência
          </Text>

          <Feather
            name="arrow-right"
            size={24}
            color="#E55050"
          />

        </View>

        <FlatList
          horizontal
          data={boletins}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 4,
            paddingRight: 12,
          }}
          renderItem={renderCard}
        />

        {/* DENUNCIAS */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Denúncias
          </Text>

          <Feather
            name="arrow-right"
            size={24}
            color="#E55050"
          />

        </View>

        <FlatList
          horizontal
          data={denuncias}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 4,
            paddingRight: 12,
          }}
          renderItem={renderCard}
        />

        {/* MEDIDAS */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Medidas protetivas
          </Text>

          <Feather
            name="arrow-right"
            size={24}
            color="#E55050"
          />

        </View>

        <Text style={styles.semRegistro}>
          Nenhuma registrada
        </Text>

      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={styles.bottomBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="home-outline" size={28} color="#404040" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Denuncia')}>
          <MaterialCommunityIcons name="message-alert-outline" size={28} color="#E07A63"/>
        </TouchableOpacity>

        <View style={styles.botaoCentral}>
          <Ionicons name="warning" size={28} color="#FFFFFF" />
        </View>

        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#404040" />

        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
          <Ionicons name="settings-outline" size={28} color="#404040" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F6F3',
  },

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

  searchRow: {
    marginTop: 28,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBox: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: 58,
    borderRadius: 18,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },

  filterButton: {
    marginLeft: 12,
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#E55050',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloContainer: {
    marginTop: 34,
    marginBottom: 26,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },

  botoesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 34,
  },

  botaoAtivo: {
    backgroundColor: '#F47C7C',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
  },

  textoBotaoAtivo: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
  },

  botaoInativo: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 16,
    backgroundColor: '#FFF',
  },

  textoBotaoInativo: {
    color: '#666',
    fontWeight: '500',
    fontSize: 14,
  },

  sectionHeader: {
    marginBottom: 18,
    marginTop: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  // card: {
  //   width: 150,
  //   backgroundColor: '#FFF',
  //   borderRadius: 20,
  //   padding: 16,
  //   marginLeft: 20,
  //   marginBottom: 24,
  //   borderWidth: 1,
  //   borderColor: '#E2E2E2',
  // },
  card: {
    width: 200,
    minHeight: 160,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginLeft: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'space-between',
  },

  cardLabel: {
    fontSize: 14,
    color: '#555',
  },

  cardNumero: {
    marginTop: 14,
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
  },

  cardData: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },

  botaoVisualizar: {
    marginTop: 18,
    backgroundColor: '#F47C7C',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoVisualizar: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 13,
  },

  semRegistro: {
    paddingHorizontal: 24,
    fontSize: 15,
    color: '#888',
    marginTop: 8,
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