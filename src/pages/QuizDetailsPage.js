import { fetchQuizById } from 'api';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getQuiz() {
      try {
        setIsLoading(true);
        const fetchedQuiz = await fetchQuizById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getQuiz();
  }, [params.quizId]);

  return (
    <div>
      {isLoading && <b>LOADING QUIZ...</b>}
      {quiz && <h1>{quiz.topic}</h1>}

      <ul>
        <li>
          <NavLink to="stats">Stats</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
