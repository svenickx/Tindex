import React, {useState} from 'react';
import {Button} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import NewQuestionInput from '../newQuestionInput';
import {
  ActionBtn,
  ActionBtns,
  Modal,
  PaddingView,
  TitleSmallBlack,
} from './style';

const NewQuestion = ({person, setPerson}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newCorrectResponse, setNewCorrectResponse] = useState('');
  const [newWrongResponse, setNewWrongResponse] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addQuestion = () => {
    const newQ = {
      question: newQuestion,
      responses: [newCorrectResponse, newWrongResponse],
      correctResponse: newCorrectResponse,
    };
    setPerson(newQ);
    toggleModal();
  };

  return (
    <PaddingView>
      <Button title="Ajouter une question" onPress={toggleModal} />
      <ReactNativeModal isVisible={isModalVisible}>
        <Modal>
          <TitleSmallBlack>Entrez une nouvelle question</TitleSmallBlack>
          <NewQuestionInput
            value="Nouvelle question"
            onInputChange={setNewQuestion}
          />
          <NewQuestionInput
            value="Bonne réponse"
            onInputChange={setNewCorrectResponse}
          />
          <NewQuestionInput
            value="Mauvaise réponse"
            onInputChange={setNewWrongResponse}
          />
          <ActionBtns>
            <ActionBtn title="Annuler" onPress={toggleModal} color={'red'} />
            <ActionBtn title="Valider" onPress={addQuestion} />
          </ActionBtns>
        </Modal>
      </ReactNativeModal>
    </PaddingView>
  );
};

export default NewQuestion;
