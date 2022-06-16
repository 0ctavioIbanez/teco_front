import Header from "../../../components/admin/Header"
import ProductCard from "../../../components/admin/ProductCard.admin"
import { request } from "../../../services/request"
import { useState, useEffect } from "react"
import { message } from "../../../assets/helpers/Message"
import SwitchButton from "../../../components/public/switch/SwitchButton"

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [publicView, setPublicView] = useState(true);

  const getProductos = async e => {
    try {
      const res = await request.get(`producto/get`);
      setProductos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const hanldeView = async ({publicCheck}) => {
    if (!publicCheck) {
      const input = await message.input("Ingresa tu contraseña");
      console.log(input);
    }
    localStorage.setItem("pv", String(publicCheck));
    setPublicView(publicCheck);
  }


  useEffect(() => {
    getProductos();
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
              <SwitchButton name="publicCheck" checked={true} handler={hanldeView} />
            </div>
          </div>
        </div>
      </div>

      <div className="page-inner mt--5">
        <div className="bg-light p-2 card">
          <div className="card shadow mb-2">
            <div className="form-group d-flex">
              <div className="input-icon flex-grow-1">
                <span className="input-icon-addon">
                  <i className="fa fa-search" />
                </span>
                <input type="text" className="form-control" placeholder="Buscar..." style={{ paddingLeft: '20px!important' }} />
              </div>
              <div className="input-group-prepend">
                <button className="btn btn-primary">Buscar</button>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="form-group">
              <label htmlFor="">Color</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="form-group">
              <label htmlFor="">Talla</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="form-group">
              <label htmlFor="">Departamento</label>
              <select className="form-control form-control-sm">
                <option value="">Seleccione</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Categoría</label>
              <select className="form-control form-control-sm">
                <option value="">Seleccione</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Tienda</label>
              <select className="form-control form-control-sm">
                <option value="">Seleccione</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Bodega</label>
              <select className="form-control form-control-sm">
                <option value="">Seleccione</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-outline-danger btn-sm">
                Limpiar
              </button>
              <button className="btn btn-primary mt-1 btn-sm">
                Aplicar
              </button>
            </div>

          </div>

        </div>


        <div className="card shadow-sm">
          <div className="card-body d-flex flex-wrap p-0">
            {productos.map((producto, p) =>
              <ProductCard producto={producto} key={`producto${p}`} publicView={publicView} />
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductList