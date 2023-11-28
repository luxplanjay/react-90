import { useSelector } from 'react-redux';
import { Account } from './Account';
import { GlobalStyle } from './GlobalStyle';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const lang = useSelector(state => state.locale.lang);

  return (
    <div>
      <LangSwitcher />
      <Account />
      <p>
        <b>Selected lang: {lang}</b>
      </p>
      <GlobalStyle />
    </div>
  );
};
