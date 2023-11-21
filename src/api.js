import axios from 'axios';

axios.defaults.baseURL = 'https://64dcf6bce64a8525a0f76db7.mockapi.io/api';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

export const fetchQuizById = async quizId => {
  const response = await axios.get(`/quizzes/${quizId}`);
  return response.data;
};

export const addNewQuiz = async newQuiz => {
  const response = await axios.post('/quizzes', newQuiz);
  return response.data;
};

export const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const updateQuiz = async (quizId, update) => {
  const response = await axios.put(`/quizzes/${quizId}`, update);
  return response.data;
};
