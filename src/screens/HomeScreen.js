import React, {useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import axios from 'axios';
import PeopleCard from '../components/peopleCard';

const HomeScreen = ({navigation}) => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const renderPeople = ({item}) => {
    return <PeopleCard person={item} />;
  };

  useEffect(() => {
    axios
      .get(`http://mobile.svenckx.com/people/${page}`)
      .then(res => {
        if (res.data.length === 0) {
          setEndReached(true);
        }
        setIsLoading(false);
        setPeople(prevPeople => [...prevPeople, ...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  if (isLoading) {
    return <Text>Loading... </Text>;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={people}
        onEndReached={() => {
          if (!endReached) {
            setPage(page + 1);
          }
        }}
        renderItem={renderPeople}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
