import React from 'react';
import {PaddingView, TitleSmallBlack} from '../../public/style/styleComponents';

const PeopleInfo = ({person}) => {
  return (
    <PaddingView>
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
    </PaddingView>
  );
};

export default PeopleInfo;
