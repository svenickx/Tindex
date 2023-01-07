import {useNavigation} from '@react-navigation/native';
import {React} from 'react';
import {View} from 'react-native';
import Picture from '../picture';
import {Card, CardTitle, DescriptionWhite, TitleWhite} from './style';

const PeopleCard = ({person}) => {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate('Profile', {id: person.id})}>
      <CardTitle>
        <TitleWhite>{person.name}</TitleWhite>
        <DescriptionWhite>{person.description}</DescriptionWhite>
      </CardTitle>
      <View key={person.id}>
        <Picture src={person.pictures[0]} />
      </View>
    </Card>
  );
};

export default PeopleCard;
