import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import PeopleInfo from '../peopleInfo';
import Picture from '../picture';
import Question from '../question';
import {DescriptionBlack, PaddingView, TitleBlack} from './style';

const MyProfileView = ({person, changePicture, pictureIndex}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={changePicture}>
          <Picture src={person.pictures[pictureIndex]} />
        </TouchableOpacity>
        <PaddingView>
          <PeopleInfo person={person} />
          <TitleBlack>Votre description</TitleBlack>
          <DescriptionBlack>{person.description}</DescriptionBlack>
        </PaddingView>
        <PaddingView>
          <TitleBlack>Vos questions</TitleBlack>
          {person.questions.map((q, i) => {
            return <Question key={i} question={q} />;
          })}
        </PaddingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfileView;
