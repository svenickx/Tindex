import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import PeopleInfo from '../peopleInfo';
import Picture from '../picture';
import Question from '../question';
import ResultMatch from '../ResultMatch';
import {DescriptionBlack, PaddingView, TitleBlack} from './style';

const ProfileView = props => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={props.changePicture}>
        <Picture src={props.person.pictures[props.pictureIndex]} />
      </TouchableOpacity>
      <PaddingView>
        <PeopleInfo person={props.person} />
        <TitleBlack>Description</TitleBlack>
        <DescriptionBlack>{props.person.description}</DescriptionBlack>
      </PaddingView>
      <PaddingView>
        <TitleBlack>Questions de {props.person.name}</TitleBlack>
        {props.person.questions.map((q, i) => {
          return (
            <Question
              key={i}
              question={q}
              handleAnswer={props.handleAnswer}
              answer={props.answerList[i]}
            />
          );
        })}
      </PaddingView>
      {props.allQuestionAnswered ? (
        <ResultMatch matchResult={props.matchResult} />
      ) : (
        ''
      )}
    </ScrollView>
  );
};

export default ProfileView;
