import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Loading from '../components/loading/loading';
import MatchRows from '../components/matchRows';

const MatchesScreen = () => {
  const [matches, setMatches] = useState([]);
  const [matchesProfiles, setMatchesProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('matches')
      .then(val => {
        if (val) {
          setMatches(JSON.parse(val));
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (matches.length > 0) {
      axios
        .post(
          'http://mobile.svenckx.com/person/getMatches',
          matches.map(e => e.personId),
        )
        .then(res => {
          setMatchesProfiles(res.data);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [matches]);

  useEffect(() => {
    if (matchesProfiles) {
    }
  }, [matchesProfiles]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      {matchesProfiles ? (
        <MatchRows matches={matches} matchesProfiles={matchesProfiles} />
      ) : (
        'No matches'
      )}
    </SafeAreaView>
  );
};

export default MatchesScreen;
