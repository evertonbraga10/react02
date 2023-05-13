import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
// // import Header from './components/Header';
import Sobre from './components/Sobre';
import Portifolio from './components/Portifolio';
import Contatos from './components/Contatos';
import NotFound from './components/NotFound';
import PageLayout from './components/layouts/PageLayout';
import Produtos from './components/Produtos';

const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<PageLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/portifolio' element={<Portifolio/>} />
            <Route path='/contatos' element={<Contatos/>} />
            <Route path='/produtos' element={<Produtos/>} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;