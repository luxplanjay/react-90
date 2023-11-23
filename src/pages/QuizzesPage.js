import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { QuizList } from 'components/QuizList/QuizList';
import { SearchBar } from 'components/SearchBar';
import { deleteQuizById, fetchQuizzes } from 'api';
import { useQuizFilters } from 'hooks/useQuizFilters';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { topic, level } = useQuizFilters();

  useEffect(() => {
    async function getQuizzes() {
      try {
        setIsLoading(true);
        setError(false);
        const initialQuizzes = await fetchQuizzes();
        setQuizItems(initialQuizzes);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getQuizzes();
  }, []);

  const deleteQuiz = async quizId => {
    try {
      setIsLoading(true);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(item => item.id !== deletedQuiz.id)
      );
    } catch (error) {
      toast.error('ERORR DELETING QUIZ!');
    } finally {
      setIsLoading(false);
    }
  };

  const visibleQuizItems = quizItems.filter(item => {
    const hasTopic = item.topic.toLowerCase().includes(topic.toLowerCase());

    if (level === 'all') {
      return hasTopic;
    }

    const matchesLevel = item.level === level;
    return hasTopic && matchesLevel;
  });

  return (
    <div>
      <SearchBar />
      {isLoading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && (
        <b>Oops! Something went wrong! Please try reloading this page! 🥹</b>
      )}
      {visibleQuizItems.length > 0 && (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
