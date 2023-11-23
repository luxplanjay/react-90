import { TopicFilter } from './TopicFilter';
import { LevelFilter } from './LevelFilter';
import { useQuizFilters } from 'hooks/useQuizFilters';

export const SearchBar = () => {
  const { resetFilters } = useQuizFilters();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};
