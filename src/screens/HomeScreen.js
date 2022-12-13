import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import PeopleCard from '../components/peopleCard';
import {CenteredView} from '../../public/style/styleComponents';

const HomeScreen = ({navigation}) => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    return (
      <CenteredView>
        <ActivityIndicator size="large" color="#E83D95" />
      </CenteredView>
    );
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
          return <PeopleCard person={props.item} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
