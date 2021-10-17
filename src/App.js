import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
// import SuspenseWithChunkError from './components/SuspenseWithChunkError';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home'));
const Rankings = lazy(() => import('./pages/Rankings'));
const Inn = lazy(() => import('./pages/Inn'));
const BankVaults = lazy(() => import('./pages/BankVaults'));
const Plains = lazy(() => import('./pages/Plains'));
const Marketplace = lazy(() => import('./pages/Marketplace'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/rankings' component={Rankings} />
        <Route exact path='/inn' component={Inn} />
        <Route exact path='/bank-vaults' component={BankVaults} />
        <Route exact path='/plains' component={Plains} />
        <Route exact path='/marketplace' component={Marketplace} />
      </Suspense>
    </Router>
  );
}

export default App;
