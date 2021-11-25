import './App.css';
import styled from 'styled-components';
import Logo from './components/Logo';

const StyledApp = styled.div`
  // box-shadow: 0em .3em 1em;
  min-width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <StyledApp className="container">
      <Logo/>
    </StyledApp>
  );
}

export default App;
