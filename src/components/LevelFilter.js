import { useQuizFilters } from 'hooks/useQuizFilters';

export const LevelFilter = () => {
  const { level, updateLevel } = useQuizFilters();

  return (
    <select value={level} onChange={evt => updateLevel(evt.target.value)}>
      <option value="all">All</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
};
