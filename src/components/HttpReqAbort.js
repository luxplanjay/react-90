import axios from 'axios';
import { useEffect, useState } from 'react';

export const HttpReqAbort = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(prevState => !prevState)}>
        {isVisible ? 'Unmount' : 'Mount'}
      </button>
      {isVisible && <ChildComponent />}
    </div>
  );
};

const ChildComponent = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setError(false);
        const url = 'https://jsonplaceholder.typicode.com/todos1';
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        setTodos(response.data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h2>ChildComponent</h2>
      {error && (
        <p style={{ color: 'red' }}>
          Sorry! There was an error! Please try refreshing the page!
        </p>
      )}
      {todos.length > 0 && (
        <div>
          {todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
