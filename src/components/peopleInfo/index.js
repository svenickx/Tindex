import React from 'react';
import {PaddingView10, TitleSmallBlack} from './style';

const PeopleInfo = ({person}) => {
  return (
    <PaddingView10>
      <TitleSmallBlack>
        Age: {person.age ? person.age : 'Non renseigné'}
      </TitleSmallBlack>
      <TitleSmallBlack>
        Genre: {person.sex ? person.sex : 'Non renseigné'}
      </TitleSmallBlack>
      <TitleSmallBlack>
        Orientation: {person.orientation ? person.orientation : 'Non renseigné'}
      </TitleSmallBlack>
      <TitleSmallBlack>
        Distance: {person.distance ? `${person.distance}km` : 'Non renseigné'}
      </TitleSmallBlack>
    </PaddingView10>
  );
};

export default PeopleInfo;
