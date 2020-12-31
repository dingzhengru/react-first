import { useContext } from 'react';

//* Context
import { ThemeContext } from '../contexts/ThemeContext';

function ContextTest() {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme.background, color: theme.color }}>ContextTest: {theme.name}</div>;
}

export default ContextTest;
