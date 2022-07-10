import { Link } from "react-router-dom"
import thumb from '../../assets/img/no-preview.jpeg';


const ProductCard = ({ producto, publicView }) => {
    return (
        <Link to={`/admin/producto/ver/${producto.id}`} className="card card__product shadow card-profile mx-1 px-0 text-center text-decoration-none hover-shadow align-self-start">

            <img className="card-img-top" src={producto.thumb || thumb} alt="Card image cap" />

            <div className="card-body pt-1">
                <div className="user-profile text-center">
                    <div className="name">{producto.nombre}</div>
                    <div className="job font-weight-bold">{producto.codigo}</div>
                    <div className="desc mb-0">{producto.descripcion}</div>
                </div>
            </div>
            <div className="card-footer pb-0">
                <div className="row user-stats text-center">
                    <div className="col">
                        <div className="number">${producto.precio}</div>
                        <div className="title">Precio</div>
                    </div>
                    <div className="col">
                        <div className="number">{producto.stock}</div>
                        <div className="title">Stock</div>
                    </div>
                    {!publicView ? <div className="col">
                        <div className="number">${producto.costo}</div>
                        <div className="title">Costo</div>
                    </div>
                        : null
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard