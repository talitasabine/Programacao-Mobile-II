import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const servicos = [
  {
    id: '1',
    titulo: 'Vaga de Cuidadora',
    descricao: '30 horas semanais, VR, VT e possibilidade de alojamento.',
    imagem: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    titulo: 'Curso de TI',
    descricao: 'Aprenda desenvolvimento web e mobile do zero.',
    imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    titulo: 'Vaga de Secretária',
    descricao: 'Atendimento, organização de agendas e suporte administrativo.',
    imagem: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    titulo: 'Vaga de Jovem Aprendiz',
    descricao: 'Oportunidade para primeiro emprego com treinamento.',
    imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    titulo: 'Curso de Design UX/UI',
    descricao: 'Criação de interfaces modernas e experiências digitais.',
    imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '6',
    titulo: 'Vaga Home Office',
    descricao: 'Trabalhe remotamente com horários flexíveis.',
    imagem: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '7',
    titulo: 'Curso de Marketing Digital',
    descricao: 'Aprenda redes sociais, tráfego pago e branding.',
    imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '8',
    titulo: 'Vaga de Atendente',
    descricao: 'Atendimento ao cliente em loja e suporte ao caixa.',
    imagem: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop',
  },
];

const alojamentos = [
  {
    id: '1',
    titulo: 'Casa Lar',
    descricao: 'Alojamento • Grátis • 1.2 km',
    detalhe: 'Quarto com duas camas de...',
  },
  {
    id: '2',
    titulo: 'Casa Santa...',
    descricao: 'Alojamento • R$40/diária • 3km',
    detalhe: 'Quarto com uma cama de...',
  },
  {
    id: '3',
    titulo: 'Residência...',
    descricao: 'Alojamento • Grátis • 4,2km',
    detalhe: 'Quarto coletivo, com cama...',
  },
];

const cursos = [
  {
    id: '1',
    titulo: 'Curso de contabilidade',
    subtitulo: 'Fundação Bradesco',
    imagem: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    titulo: 'Curso de programação',
    subtitulo: 'Fatec',
    imagem: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
];

const SectionTitle = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Feather name="arrow-right" size={26} color="#E55050" />
  </View>
);

export default function Inicio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
      >
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

        <SectionTitle title="Serviços para você" />

        <FlatList
          horizontal
          data={servicos}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 24, paddingRight: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardServico}>
              <Image source={{ uri: item.imagem }} style={styles.imagemServico} />
              <Text style={styles.tituloServico}>{item.titulo}</Text>
              <Text style={styles.descricaoServico}>{item.descricao}</Text>
            </TouchableOpacity>
          )}
        />

        <SectionTitle title="Alojamento" />

        <View style={styles.alojamentoContainer}>
          {alojamentos.map((item) => (
            <TouchableOpacity key={item.id} style={styles.alojamentoCard}>
              <View style={styles.alojamentoIcone}>
                <MaterialIcons name="location-city" size={34} color="#C9C3D5" />
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.rowBetween}>
                  <Text style={styles.alojamentoTitulo}>{item.titulo}</Text>
                  <View style={styles.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <AntDesign key={star} name="star" size={13} color="#E5DDF3" />
                    ))}
                  </View>
                </View>
                <Text style={styles.alojamentoDescricao}>{item.descricao}</Text>
                <Text style={styles.alojamentoDetalhe}>{item.detalhe}</Text>
              </View>
              <TouchableOpacity>
                <AntDesign name="hearto" size={22} color="#222" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        <SectionTitle title="Cursos" />

        <FlatList
          horizontal
          data={cursos}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 24, paddingRight: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardCurso}>
              <Image source={{ uri: item.imagem }} style={styles.imagemCurso} />
              <Text style={styles.tituloCurso}>{item.titulo}</Text>
              <Text style={styles.subtituloCurso}>{item.subtitulo}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" size={28} color="#E07A63" />

        <TouchableOpacity onPress={() => navigation.navigate('Denuncia')}>
          <MaterialCommunityIcons name="message-alert-outline" size={28} color="#404040" />
        </TouchableOpacity>

        {/* ✅ Botão do pânico com navegação */}
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
  sectionHeader: {
    marginTop: 34,
    marginBottom: 22,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  cardServico: {
    width: 320,
    marginRight: 18,
  },
  imagemServico: {
    width: '100%',
    height: 200,
    borderRadius: 28,
  },
  tituloServico: {
    marginTop: 18,
    fontSize: 17,
    fontWeight: '700',
    color: '#E55050',
  },
  descricaoServico: {
    marginTop: 4,
    fontSize: 15,
    color: '#555',
  },
  alojamentoContainer: {
    paddingHorizontal: 16,
  },
  alojamentoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E1EA',
    gap: 14,
  },
  alojamentoIcone: {
    width: 78,
    height: 78,
    borderRadius: 18,
    backgroundColor: '#EFE9F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alojamentoTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#E55050',
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  alojamentoDescricao: {
    marginTop: 4,
    fontSize: 15,
    color: '#222',
  },
  alojamentoDetalhe: {
    marginTop: 3,
    fontSize: 15,
    color: '#555',
  },
  cardCurso: {
    width: 320,
    marginRight: 18,
  },
  imagemCurso: {
    width: '100%',
    height: 190,
    borderRadius: 28,
  },
  tituloCurso: {
    marginTop: 16,
    fontSize: 17,
    fontWeight: '700',
    color: '#E55050',
  },
  subtituloCurso: {
    marginTop: 4,
    fontSize: 15,
    color: '#555',
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