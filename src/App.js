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

// Departamentos
import DepartamentosListado from './views/admin/departamentos/DepartamentosListado';
import DepartamentoNuevo from './views/admin/departamentos/DepartamentoNuevo';

// Categorías
import CategoriasListado from './views/admin/categorias/CategoriasListado';
import CategoriasNuevo from './views/admin/categorias/CategoriasNuevo';

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
            
            <Route path='producto'>
              <Route path='listado' element={<ProductList />} />
              <Route path='nuevo' element={<ProductNew />} />
            </Route>

            <Route path='departamento'>
              <Route path='todos' element={ <DepartamentosListado /> } />
              <Route path='nuevo' element={ <DepartamentoNuevo /> } />
              <Route path='ver/:id' element={ <DepartamentoNuevo /> } />
            </Route>

            <Route path='categorias'>
              <Route path='todas' element={ <CategoriasListado /> } />
              <Route path='nueva' element={ <CategoriasNuevo /> } />
              <Route path='ver/:id' element={ <CategoriasNuevo /> } />
            </Route>
          </Route>
        </Route>

        <Route path='/' element={<ProductNew />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
