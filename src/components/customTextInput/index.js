import React from 'react';
import Input from 'react-native-input-style';

const CustomTextInput = ({value, onInputChange}) => {
  const usernameFR = "Nom d'utilisateur";
  const passwordFR = 'Mot de passe';
  const valueFR = value === 'Username' ? usernameFR : passwordFR;

  return (
    <Input
      id={value}
      label={valueFR}
      required
      minLength={value === 'Username' ? 3 : 8}
      maxLength={value === 'Username' ? 15 : 30}
      autoCapitalize="none"
      errorText={`${valueFR} non valide`}
      onInputChange={(id, input) => {
        onInputChange(input);
      }}
      outlined
      borderColor="black"
      secureTextEntry={value === 'Password'}
    />
  );
};

export default CustomTextInput;
