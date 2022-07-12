import Main from "../layout/Main"
import ProductCard from "../../../components/admin/ProductCard.admin"
import { request } from "../../../services/request"
import { useState, useEffect } from "react"
import { message } from "../../../assets/helpers/Message"
import Search from "../../../components/admin/productos/search/Search"
import SwitchButton from "../../../components/public/switch/SwitchButton"

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [publicView, setPublicView] = useState(true);

  const checkViewType = () => {
    const status = localStorage.getItem("pv");
    if (!status) {
      localStorage.setItem("pv", "true");
    }
    if (status === "false") {
      return setPublicView(false);
    }

    setPublicView(true);
  }

  const handleView = async ({ publicCheck }) => {
    if (!publicCheck) {
      const input = await message.input("Ingresa tu contraseña");
    }
    localStorage.setItem("pv", String(publicCheck));
    setPublicView(publicCheck);
  }

  // const getProductos = async e => {
  //   try {
  //     const res = await request.get(`producto/get`);
  //     setProductos(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    checkViewType();
  }, [])


  return (
    <>
      <div className="panel-header bg-primary-gradient">
        <div className="page-inner py-5">
          <div className="d-flex flex-wrap align-items-left align-items-md-center flex-column flex-md-row justify-content-between">
            <h2 className="text-white pb-2 fw-bold mb-0">Listado de productos</h2>
            <div className="d-flex align-items-center">
              <span className="text-light mr-1">Vista pública</span>
              <SwitchButton name="publicCheck" checked={true} handler={handleView} />
            </div>
          </div>
        </div>
      </div>

      <Main>
        <Search onSearch={setProductos} />


        <div className="card shadow-none">
          <div className="card-body bg-light d-flex flex-wrap p-0">
            {productos.map((producto, p) =>
              <ProductCard producto={producto} key={`producto${p}`} publicView={publicView} />
            )}
          </div>

        </div>
      </Main>
    </>
  )
}

export default ProductList