import { useSearchParams } from 'react-router-dom';

export const useQuizFilters = () => {
  const [params, setParams] = useSearchParams();
  const topic = params.get('topic') ?? '';
  const level = params.get('level') ?? 'all';

  const updateLevel = value => {
    params.set('level', value);
    setParams(params);
  };

  const updateTopic = value => {
    params.set('topic', value);
    setParams(params);
  };

  const resetFilters = () => {
    setParams({ topic: '', level: 'all' });
  };

  return {
    topic,
    level,
    updateLevel,
    updateTopic,
    resetFilters,
  };
};
