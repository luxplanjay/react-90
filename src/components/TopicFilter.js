import { useQuizFilters } from 'hooks/useQuizFilters';

export const TopicFilter = () => {
  const { topic, updateTopic } = useQuizFilters();

  return (
    <input
      type="text"
      value={topic}
      onChange={evt => updateTopic(evt.target.value)}
      placeholder="Topic filter"
    />
  );
};
