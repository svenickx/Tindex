import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  PaddingView,
  PickerFalseResponse,
  PickerGoodResponse,
  SidePaddingView,
} from './style';

const Question = ({question, handleAnswer, answer}) => {
  const [selectedResponse, setSelectedResponse] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const validateResponse = () => {
    if (selectedResponse === '') {
      return;
    }

    setIsAnswered(true);
    if (selectedResponse === question.correctResponse) {
      handleAnswer(true);
      setIsCorrect(true);
    } else {
      handleAnswer(false);
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (answer === true) {
      setIsAnswered(true);
      setIsCorrect(answer);
    } else if (answer === false) {
      setIsAnswered(true);
      setIsCorrect(answer);
    }
  }, [answer]);

  return (
    <PaddingView>
      <SidePaddingView>
        <Text>{question.question}</Text>
        {isAnswered ? (
          isCorrect ? (
            <PickerGoodResponse>
              <Picker enabled={!isAnswered}>
                {question.responses.map(res => {
                  return <Picker.Item key={res} label={res} value={res} />;
                })}
              </Picker>
            </PickerGoodResponse>
          ) : (
            <PickerFalseResponse>
              <Picker enabled={!isAnswered}>
                {question.responses.map(res => {
                  return <Picker.Item key={res} label={res} value={res} />;
                })}
              </Picker>
            </PickerFalseResponse>
          )
        ) : (
          <View>
            <Picker
              enabled={!isAnswered}
              selectedValue={selectedResponse}
              onValueChange={itemValue => setSelectedResponse(itemValue)}>
              <Picker.Item label="Choisir une réponse..." value="" />
              {question.responses.map(res => {
                return <Picker.Item key={res} label={res} value={res} />;
              })}
            </Picker>
          </View>
        )}

        {isAnswered || !handleAnswer ? (
          ''
        ) : (
          <Button
            title="Valider la réponse"
            disabled={isAnswered}
            onPress={validateResponse}
          />
        )}
      </SidePaddingView>
    </PaddingView>
  );
};

export default Question;
