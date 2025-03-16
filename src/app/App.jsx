import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '@pages/home/Index';
import Community from '@pages/community/Community';
import NotFound from '@pages/error/NotFound';
import SignIn from '@pages/sign-in/SignIn';
import Items from '@pages/items/Index';
import Layout from './layout/Layout';
import Registration from '@pages/registration/Index';
import DetailItem from '@pages/detailItem';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/items' element={<Items />} />
          <Route path='/items/:itemId' element={<DetailItem />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
