import React from 'react';
import {View} from 'react-native';
import MatchInfo from '../matchInfo';
import MatchPicture from '../matchPicture';
import {ViewRow} from './style';

const MatchRows = ({matchesProfiles, matches}) => {
  return (
    <View>
      {matchesProfiles.map((profile, index) => {
        return (
          <ViewRow key={index}>
            <MatchPicture src={profile.pictures[0]} profileId={profile.id} />
            <MatchInfo matches={matches} profile={profile} />
          </ViewRow>
        );
      })}
    </View>
  );
};

export default MatchRows;
