export const SearchBar = ({
  filters: { topic, level },
  onUpdateTopic,
  onUpdateLevel,
}) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={evt => onUpdateTopic(evt.target.value)}
        placeholder="Topic filter"
      />
      <select value={level} onChange={evt => onUpdateLevel(evt.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
