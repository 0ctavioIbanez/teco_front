import { Link } from "react-router-dom"
import image from '../../../assets/img/no-preview.jpeg'

const Card = ({ depto, className }) => {
    console.log(depto);
    return (
        <Link className={`card ${className}`} style={{ width: '18rem' }} to={`/admin/departamento/ver/${depto.id}`}>
            <img className="card-img-top" src={depto.mainImage ? depto.mainImage.image : image} alt="Departamento" />
            <div className="card-body">
                <h5 className="card-title text-center">{depto.departamento}</h5>
            </div>
        </Link>
    )
}

export default Card