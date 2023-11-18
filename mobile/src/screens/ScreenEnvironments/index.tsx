import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import styles from './styles';

export function Environments() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8090/salas');
      const data = response.data;

      console.log('Resposta do servidor ao buscar ambientes:', data);

      if (data.length === 0) {
        setNoResults(true);
        setSearchError('');
      } else {
        setResults(data);
        setNoResults(false);
        setSearchError('');
      }
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setSearchError('Erro ao buscar ambientes.');
    }
  };

  const handleButtonClick = async () => {
    try {
      if (query.trim() !== '') {
        const response = await axios.get(`http://localhost:8090/salas?query=${query}`);
        const data = response.data;

        console.log('Resposta do servidor ao buscar ambientes por query:', data);

        if (data.length === 0) {
          setNoResults(true);
          setSearchError('');
        } else {
          setResults(data);
          setNoResults(false);
          setSearchError('');
        }
      } else {
        setSearchError('A consulta de pesquisa está vazia. Por favor, insira um termo de pesquisa.');
        setNoResults(true);
        setResults([]);
      }
    } catch (error) {
      console.error('Erro ao buscar ambientes:', error);
      setSearchError('Erro ao buscar ambientes.');
    }
  };

  const handleOpenScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Ambientes:</Text>

      {/* Input search */}
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.inputSearchHolder}>
          <TextInput
            placeholder="Pesquisar por Ambientes"
            value={query}
            onChangeText={(text) => setQuery(text)}
            style={{ width: '90%', fontStyle: 'italic', color: 'grey' }}
          />
          <TouchableOpacity
            style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 10 }}
            onPress={handleButtonClick}
          >
            <Image source={require('../../../assets/search.svg')} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>
        </View>
      </View>

      {!!searchError && <Text style={styles.errorMessage}>{searchError}</Text>}

      {noResults ? (
        <Text>Nenhum ambiente encontrado com o nome "{query}".</Text>
      ) : (
        <View style={styles.searchResults}>
          {results.map((result, index) => (
            <Text key={index}>{result.nome}</Text>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleOpenScreen}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}