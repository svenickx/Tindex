import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import PeopleCard from '../components/peopleCard';
import {PROFILE_ID} from 'react-native-dotenv';
import Loading from '../components/loading/loading';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);

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
    return <Loading />;
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
        renderItem={props => {
          if (props.item.id.toString() !== PROFILE_ID) {
            return <PeopleCard person={props.item} />;
          }
          return '';
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
