import {useNavigation} from '@react-navigation/native';
import {React} from 'react';
import {View} from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  Title,
} from '../../public/style/styleComponents';
import Picture from './picture';

const PeopleCard = ({person}) => {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate('Profile', {id: person.id})}>
      <CardTitle>
        <Title>{person.name}</Title>
      </CardTitle>
      <View key={person.id}>
        <Picture src={person.pictures[0]} />
      </View>
    </Card>
  );
};

export default PeopleCard;
