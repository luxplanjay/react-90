import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CreateQuizPage from 'pages/CreateQuizPage';
import QuizzesPage from 'pages/QuizzesPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateQuizPage />} />
        <Route path="list" element={<QuizzesPage />} />
        <Route path="list/:quizId" element={<QuizDetailsPage />}>
          <Route path="stats" element={<div>Stats</div>} />
          <Route path="users" element={<div>Users</div>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
