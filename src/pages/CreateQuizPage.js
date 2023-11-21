import { QuizForm } from 'components/QuizForm/QuizForm';
import { addNewQuiz } from 'api';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CreateQuizPage() {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setIsLoading(true);
      await addNewQuiz(newQuiz);
    } catch (error) {
      toast.error('ERROR ADDING QUIZ!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {isLoading && <b>ADDING NEW QUIZ...</b>}
    </div>
  );
}
