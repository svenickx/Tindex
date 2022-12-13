import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Question = ({question, index}) => {
  const [selectedResponse, setSelectedResponse] = useState('1');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const validateResponse = () => {
    setIsAnswered(true);
    if (selectedResponse === '1') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <View>
      <Text>|</Text>
      <Text>|</Text>
      <Text>|</Text>
      <Text>|</Text>
      <Text>QUESTION {index}</Text>
      <Text>{question.question}</Text>
      {isAnswered ? (
        isCorrect ? (
          <Text>Correct!</Text>
        ) : (
          <Text>Incorrect</Text>
        )
      ) : (
        ''
      )}
      <Picker
        enabled={!isAnswered}
        selectedValue={selectedResponse}
        onValueChange={itemValue => setSelectedResponse(itemValue)}>
        {question.responses.map(res => {
          return <Picker.Item key={res} label={res} value={res} />;
        })}
      </Picker>
      <Button
        title="Valider la réponse"
        disabled={isAnswered}
        onPress={validateResponse}
      />
    </View>
  );
};

export default Question;
