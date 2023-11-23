import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CreateQuizPage = lazy(() => import('pages/CreateQuizPage'));
const QuizzesPage = lazy(() => import('pages/QuizzesPage'));
const QuizDetailsPage = lazy(() => import('pages/QuizDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

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
