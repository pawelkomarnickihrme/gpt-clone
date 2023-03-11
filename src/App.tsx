import { useEffect } from 'react';
import styled from 'styled-components';
import Chat from './chat/Chat';
import generateResponse from './chatgpt/generateResponse';
const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  position: absolute;
  bottom: 45px;
  right: 80px;
`;
function App() {
  useEffect(() => console.log(generateResponse()), []);
  return (
    <Main>
      <Container>
        <Chat />
      </Container>
    </Main>
  );
}

export default App;
