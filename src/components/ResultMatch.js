import React from 'react';
import {Text} from 'react-native';
import {
  PaddingView,
  SidePaddingView,
  TitleBlack,
} from '../../public/style/styleComponents';

const ResultMatch = ({matchResult}) => {
  return (
    <PaddingView>
      <TitleBlack>Résultat</TitleBlack>
      <SidePaddingView>
        {matchResult >= 0.5 ? (
          <Text>{matchResult * 100}% - C'est un match</Text>
        ) : (
          <Text>{matchResult * 100}% - Pas de match</Text>
        )}
      </SidePaddingView>
    </PaddingView>
  );
};

export default ResultMatch;
