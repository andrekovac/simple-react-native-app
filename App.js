import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

function Item({ author, url }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => Alert.alert(
        'Author',
        author,
        [
          {text: 'Ok'},
        ],
        {cancelable: false},
      )}
    >
      <Image
        source={{ uri: url }}
        style={{ width: 300, height: 300 }}
      />
    </TouchableOpacity>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photos</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item author={item.author} url={item.download_url} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: Constants.statusBarHeight,
  },
  header: {
    fontSize: 20,
    paddingVertical: 10,
  },
  item: {
    marginVertical: 5,
  },
  title: {
    fontSize: 32,
  },
});
