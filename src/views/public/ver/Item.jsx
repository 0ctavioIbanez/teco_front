import { request } from "../../../services/request"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const getProducto = async () => {
    const _producto = await request.get(`producto/get/${id}`);
    setProducto(_producto.details)
    console.log(producto);
  }

  useEffect(() => {
    // return () => {
      getProducto();
    // }
  }, [])

  return (
    <div>Item {producto.nombre}</div>
  )
}

export default Item