import { Outlet } from "react-router-dom"
import './layout.css';
import Navbar from "../../../components/public/navbar/Navbar";
import Sidebar from "../../../components/public/sidebar/Sidebar";
import { request } from '../../../services/request';
import { useState, useEffect } from "react";

const MasterLayout = () => {
  const [expanded, setExpanded] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);
  const [productos, setProductos] = useState([]);

  const getCatDeptos = async () => {
    try {
      const res = await request.get('categoria/departamentos');
      setDepartamentos(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCatDeptos();
  }, [])


  return (
    <div className="public__">
      <Sidebar items={departamentos} expanded={expanded} setExpanded={setExpanded} />
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <Outlet context={[departamentos]} />
    </div>
  )
}

export default MasterLayout