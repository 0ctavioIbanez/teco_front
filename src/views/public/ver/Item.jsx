import { request } from "../../../services/request"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Slider from "../../../components/public/slider/Slider";

const Item = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const getProducto = async () => {
    const _producto = await request.get(`producto/get/${id}`);
    setProducto(_producto.data.details);
  }

  useEffect(() => {
    // return () => {
      getProducto();
    // }
  }, [])

  return (
    <section>
      <div className="slider__item">
        <Slider images={producto.imagenes.map(({image}) => image)} />
      </div>
    </section>
  )
}

export default Item