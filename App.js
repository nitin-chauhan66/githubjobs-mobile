

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import useFetchJobs from './src/components/useFetchJobs';
import Job from "./src/components/Job";
import SearchBar from "./src/components/SearchBar"
import { useState } from 'react';
import { Appbar } from 'react-native-paper';

function App() {
  const [params,setParams]  = useState({});
  const [page,setPage] = useState(1);
  const {jobs,loading,error} = useFetchJobs(params,page);
  const renderItem = ({ item }) => (
    <Job job={item} />
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor:'#f6f6f6'}}>
      <SearchBar/>
      <View style={styles.container}>

        {!error&& loading?(<ActivityIndicator size={'large'} color={'black'}/>):(
          
         
          <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          
       
        )}
        {error&&<View><Text>Error Try Agian</Text></View>}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:16,
    marginBottom:100,
    paddingTop:16
  }
})
export default App;
