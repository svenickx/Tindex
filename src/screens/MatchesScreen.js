import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import CenteredText from '../components/centeredText';
import Loading from '../components/LoadingComponents/loading';
import MatchRows from '../components/MatchsComponents/matchRows';

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
      .catch(err => console.error(err));
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
        })
        .catch(err => console.error(err));
    }
    setIsLoading(false);
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
      {matchesProfiles && matchesProfiles.length > 0 ? (
        <MatchRows matches={matches} matchesProfiles={matchesProfiles} />
      ) : (
        <CenteredText title={'Aucun Match!'} />
      )}
    </SafeAreaView>
  );
};

export default MatchesScreen;
