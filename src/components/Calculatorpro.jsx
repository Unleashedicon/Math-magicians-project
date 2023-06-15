import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Calculatorlink from '../routes/Calculator';
import Quote from '../routes/Quote';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';

const Calculatorpro = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculatorlink />} />
      <Route path="quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default Calculatorpro;
