import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Admin
import Layout from './views/admin/layout/Layout';
import PublicLayout from './views/admin/layout/PublicLayout';
import Dashboard from './views/admin/Dashboard';
import Login from './views/admin/Login';

// Productos
import ProductList from './views/admin/Productos/ProductList';
import ProductNew from './views/admin/Productos/ProductNew';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin         */}
        <Route path='admin'>
          <Route path='' element={<PublicLayout />} >
            <Route index element={<Login />} />
          </Route>

          <Route element={<Layout />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='producto-listado' element={<ProductList />} />
            <Route path='producto-nuevo' element={<ProductNew />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
