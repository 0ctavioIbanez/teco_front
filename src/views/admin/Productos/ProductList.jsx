import Header from "../../../components/admin/Header"
import ProductCard from "../../../components/admin/ProductCard.admin"

const ProductList = () => {
  return (
    <>

      <Header title="Listado de productos" subtitle="Inicia una búsqueda" />
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
          <div className="card-body">
            <ProductCard />
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductList