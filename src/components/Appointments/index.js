import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointments() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ url: 'https://api.adorable.oi/avatar/50/heverson.png' }}
        />
        <Info>
          <Name>Heverson Silva</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
