import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BannerFilme from './src/components/bannerFilmes';

import Header from './src/components/header';
import SearchBar from './src/components/searchbar';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilme></BannerFilme>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
