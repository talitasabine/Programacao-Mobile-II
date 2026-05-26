import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';

const Tela2 = ({route, navigation}) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [erros, setErros] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const validarCampos = () => {
        let errosTemp = {};
        if (!nome) errosTemp.nome = 'Digite seu nome';
        if (!cpf) errosTemp.cpf = 'Digite seu CPF';
        if (!dataNascimento) errosTemp.dataNascimento = 'Digite sua data de nascimento';
        if (!celular) errosTemp.celular = 'Digite seu celular';
        if (!email) errosTemp.email = 'Digite seu email';
        if (!senha) errosTemp.senha = 'Digite uma senha';
        setErros(errosTemp);
        return Object.keys(errosTemp).length === 0;
    };

    const handleSalvar = async () => {
        const dados = { id: '0', nome, cpf, dataNascimento, celular, email, senha };
        if (validarCampos()) {
            try {
                dados.id = Math.floor(Math.random() * 10000) + '';
                await AsyncStorage.setItem(dados.id, JSON.stringify(dados));
                setModalVisible(true);
            } catch (error) {
                console.warn('Erro ao salvar os dados no AsyncStorage:', error);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.formContainer}>
            <Image
            source={require('../assets/cadastro.png')}
            style={styles.imagemTitulo}
            resizeMode="contain"
            />

                {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome completo"
                    placeholderTextColor="#aaa"
                    maxLength={100}
                />

                {erros.cpf && <Text style={styles.erro}>{erros.cpf}</Text>}
                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                    placeholder="000.000.000-00"
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={14}
                />

                {erros.celular && <Text style={styles.erro}>{erros.celular}</Text>}
                <Text style={styles.label}>Celular</Text>
                <TextInput
                    style={styles.input}
                    value={celular}
                    onChangeText={setCelular}
                    placeholder="(DDD) 99999-9999"
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                    maxLength={15}
                />

                {erros.dataNascimento && <Text style={styles.erro}>{erros.dataNascimento}</Text>}
                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                    style={styles.input}
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#aaa"
                    maxLength={10}
                />

                {erros.email && <Text style={styles.erro}>{erros.email}</Text>}
                <Text style={styles.label}>Seu email</Text>
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

                <View style={styles.labelRow}>
                    <Text style={styles.label}>Sua senha</Text>
                    <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                        <Ionicons name={senhaVisivel ? "eye-outline" : "eye-off-outline"} size={18} color="#888" />
                    </TouchableOpacity>
                </View>
                {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}
                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite uma senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!senhaVisivel}
                    maxLength={15}
                />

                <Pressable style={styles.button} onPress={handleSalvar}>
                    <Text style={styles.text}>Cadastrar</Text>
                </Pressable>

                <Text style={styles.termos}>
                    Ao clicar em Cadastre-se, você concorda com nossos{' '}
                    <Text style={styles.termosLink}>Termos, Política de Privacidade e Política de Cookies</Text>
                    . Você poderá receber notificações por SMS e cancelar isso quando quiser.
                </Text>

                <View style={styles.divider} />

                <View style={styles.rodape}>
                    <Text style={styles.rodapeTexto}>Já tem conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.acesseTexto}>Acesse aqui</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Modal transparent={true} visible={modalVisible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Login');
                            }}>
                            <Text style={styles.closeText}>✕</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>
                            Cadastro feito{'\n'}com sucesso!
                        </Text>
                        <Text style={styles.modalText}>
                            Realize o login para acessar o app
                        </Text>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

export default Tela2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    formContainer: {
        padding: 24,
        paddingBottom: 40,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        color: '#444',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 14,
        fontSize: 15,
        color: '#333',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#F47C7C',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    termos: {
        fontSize: 12,
        color: '#888',
        lineHeight: 18,
        marginBottom: 24,
    },
    termosLink: {
        color: '#F47C7C',
    },
    divider: {
        height: 1,
        backgroundColor: '#DDD',
        marginBottom: 20,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rodapeTexto: {
        fontSize: 14,
        color: '#555',
    },
    acesseTexto: {
        fontSize: 14,
        color: '#F47C7C',
        fontWeight: 'bold',
    },
    erro: {
        color: 'red',
        fontSize: 12,
        marginBottom: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '82%',
        backgroundColor: '#FFF',
        borderRadius: 28,
        padding: 28,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 18,
        right: 18,
    },
    closeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 18,
    },
    modalText: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        lineHeight: 26,
    },
    imagemTitulo: {
    width: '100%',
    height: 70,
    marginBottom: 24,
},
});