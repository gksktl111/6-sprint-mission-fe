import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './../pages/home/Index';
import Community from './../pages/community/Community';
import UsedMarket from './../pages/used-market/Index';
import NotFound from '../pages/error/NotFound';
import SignIn from './../pages/sign-in/SignIn';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/used-market' element={<UsedMarket />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
