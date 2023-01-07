import React from 'react';
import Input from 'react-native-input-style';

const NewQuestionInput = ({value, onInputChange}) => {
  return (
    <Input
      id={value}
      label={value}
      required
      minLength={1}
      maxLength={30}
      autoCapitalize="none"
      errorText={`${value} non valide`}
      onInputChange={(id, input) => {
        onInputChange(input);
      }}
      outlined
      borderColor="black"
    />
  );
};

export default NewQuestionInput;
