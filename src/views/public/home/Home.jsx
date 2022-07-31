import './home.css'
import Slider from '../../../components/public/slider/Slider'
import { Link, useOutletContext } from 'react-router-dom'

const Home = () => {
    const [items] = useOutletContext();

    return (
        <main className='main'>
            <div className="home__slider">
                <Slider images={['https://img5.goodfon.com/wallpaper/nbig/d/1e/devushka-blondinka-sidit-ulybka-figura-nozhki-kolgotki-setka.jpg', 'https://cache.desktopnexus.com/thumbseg/1881/1881227-bigthumbnail.jpg']} />
            </div>

            <section className='mt-5'>
                <h2 className='text-center main-section-title public__text-secondary my-5'>¿De qué tienes <span className='public__text-primary'>ganas</span> hoy?</h2>
                {items.map((item, i) =>
                    <div className='home__section public__container' key={`deptos-${i}`}>
                        <div className="home__departamento home__slider">
                            <h5 className='section__title'>{item.departamento}</h5>
                            <img src="https://thumbs.dreamstime.com/b/hermosa-chica-de-moda-con-el-pelo-largo-rizado-en-un-vestido-rosa-estudio-sobre-fondo-publicitario-publicidad-productos-para-212257109.jpg" alt="cover" />
                        </div>
                        <div className="home__categorias py-2 pt-4 overflow-x d-flex">
                            {item.categorias.map((cat, c) =>
                                <Link to={`tienda?d=${item.id}&c=${cat.id}`} className="home__categorias__item">
                                    <div className="card">
                                        <img src="https://cdn.shopify.com/s/files/1/2100/3755/products/Women_s-Active-Sports-Socks-White-Front.jpg?v=1614791239" className='shadow' alt="category" />
                                        <h4 className='home__categorias__item__name'>{cat.categoria}</h4>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Home