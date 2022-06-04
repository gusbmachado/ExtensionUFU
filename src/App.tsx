import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './providers/Auth';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { NavbarScroller } from './components';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <NavbarScroller />
      <Routes />
      <GlobalStyle />
    </AppProvider>
  </BrowserRouter>
);

export default App;
