import React from 'react';
import { View, Text } from 'react-native';

class AlbumList extends React.Component {
  componentDidMount() {
    console.log('componentDidMount in AlbumList!');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
