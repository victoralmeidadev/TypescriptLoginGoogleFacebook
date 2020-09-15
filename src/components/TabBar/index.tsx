import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TabBar: React.FC = (props) => {
  console.log({ props });
  return (
    <View
      style={{
        backgroundColor: '#fca',
        borderRadius: 25,
        height: 50,
      }}>
      <TouchableHighlight>
        <Icon name="home" />
      </TouchableHighlight>
    </View>
  );
};

export default TabBar;
