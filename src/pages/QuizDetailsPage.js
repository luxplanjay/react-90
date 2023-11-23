import { fetchQuizById } from 'api';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function QuizDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location);

  // console.log('QuizDetailsPage location: ', location);
  // console.log('QuizDetailsPage backLinkRef: ', backLinkRef.current);

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
      <Link to={backLinkRef.current.state?.from ?? '/list'}>
        <b>Back to quizzes</b>
      </Link>
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
