import { useEffect, useState } from "react";
import { request } from '../../../services/request';
import { useSearchParams } from "react-router-dom";
import qs from 'query-string';
import ProductCard from "../../../components/public/producto/ProductCard";
import './tienda.css'
import Filters from "../../../components/public/filters/Filters";

const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [querySearch, setQuerySearch] = useSearchParams({});


  const getProductos = async () => {
    const _query = qs.parse(window.location.search);
    const res = await request.post('search', _query);
    setProductos(res.data)
  }

  const handleParams = () => {
    // setQuerySearch(qs.parse(window.location.search));
    getProductos();
  };

  const handleFilters = term => {};

  useEffect(() => {
    handleParams();
  }, [querySearch]);




  return (
    <main className="main__tienda">
      <Filters />
      <section className="d-flex flex-wrap justify-content-between main__tienda__products">
        {productos.map((producto, p) =>
          <ProductCard producto={producto} key={`product-card-${p}`} />
        )}
      </section>
    </main>
  )
}

export default Tienda