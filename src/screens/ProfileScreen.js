import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Question from '../components/question';
import Picture from '../components/picture';

const ProfileScreen = ({route, navigation}) => {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pictureIndex, setPictureIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://mobile.svenckx.com/person/${route.params.id}`)
      .then(res => {
        setPerson(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [route.params.id]);

  useEffect(() => {
    navigation.setOptions({
      title: `Profil de ${person.name}`,
    });
  }, [person.name, navigation]);

  const changePicture = () => {
    if (pictureIndex < person.pictures.length - 1) {
      setPictureIndex(pictureIndex + 1);
    } else {
      setPictureIndex(0);
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={changePicture}>
          <Picture src={person.pictures[pictureIndex]} />
        </TouchableOpacity>
        <View>
          <Text>{person.name}</Text>
        </View>
        {person.questions.map((q, i) => {
          return <Question key={i} question={q} index={i + 1} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
