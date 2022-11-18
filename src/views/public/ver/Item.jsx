import { request } from "../../../services/request"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import Slider from "../../../components/public/slider/Slider";
import './item.css';

const Item = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const getProducto = async () => {
    const _producto = await request.get(`producto/get/${id}`);
    setProducto(_producto.data.details);
    console.log(producto);
  }

  const handleSelectedColor = ({ target }) => {
    const targetClass = target.parentElement.classList;
    if (targetClass.contains('color--active')) {
      targetClass.remove('color--active');
    } else {
      targetClass.add('color--active');
    }
  }

  useEffect(() => {
    return () => {
      getProducto();
    }
  }, []);

  const tagsTemplate = () =>
    producto.tags?.length ? (
      <div className="mt-3 bg-primary--glass rounded p-3">
        <h5>Etiquetas</h5>
        {producto.tags.map(tag =>
          <Link className="font-italic badge badge-light text-info" to={`search/${tag.id}`}>#{tag.tag}</Link>
        )}
      </div>) : null;

  const tallasTemplate = () => producto.tallas?.length ? (
    <div className="mt-3 bg-primary--glass rounded p-3">
      <h5>Tallas</h5>
      {producto.tallas.map(talla =>
        <div className="badge badge-info">{talla.talla}</div>
      )}
    </div>
  ) : null;

  const colorsTemplate = () => producto.colores?.length ? (
    <div className="mt-3 bg-primary--glass rounded p-3">
      <h5>Colores</h5>
      {producto.colores.map(color =>
        <div className="product__color">
          <div className="product__info__color" style={{ background: color.hex }}>
            <input type='radio' value={color.id} onClick={handleSelectedColor} />
          </div>
          <label htmlFor="">{color.color}</label>
        </div>
      )}
    </div>
  ) : null;

  return (
    <section className="container item">
      <div className="item__container d-flex">
        <div className="item__pics px-3">
          <Slider
            images={producto?.imagenes?.map(({ image }) => image)}
            config={{
              autoplay: true,
              showThumbs: true
            }}
          />
        </div>
        <div className="item__info">
          <div className="d-flex item__info__title">
            <h1>{producto.nombre}</h1>
            <h2>${producto.precio}</h2>
          </div>
          <p>{producto.descripcion}</p>

          {colorsTemplate()}
          {tallasTemplate()}
          {tagsTemplate()}
        </div>
      </div>
    </section>
  )
}

export default Item