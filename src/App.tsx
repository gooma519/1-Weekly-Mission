import Nav from './components/Nav';
import Footer from './components/Footer';
import getData from './services/api';
import { useEffect, useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

interface User {
  image_source?: string;
  email?: string;
}

function App() {
  const [user, setUser] = useState<User>({});
  const urlPath = useLocation().pathname;

  const getUserData = useCallback(async () => {
    const { data } = await getData('users/1');
    setUser(data[0]);
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <Container className='App'>
      <div>
        <Nav user={user} urlPath={urlPath} />
        <Outlet context={urlPath} />
      </div>
      <Footer />
    </Container>
  );
}

export default App;