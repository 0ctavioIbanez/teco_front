import './home.css'
import Slider from '../../../components/public/slider/Slider'
import { Link, useOutletContext } from 'react-router-dom'

const Home = () => {
    const [items] = useOutletContext();

    return (
        <main className='main'>
            <div className="home__slider">
                <Slider />
            </div>
            {items.map((item, i) =>
                <section className='home__section' key={`deptos-${i}`}>
                    <h5 className='section__title'>Departamentos</h5>
                    <div className="home__departamento home__slider">
                        <img src="https://c4.wallpaperflare.com/wallpaper/540/853/301/girl-street-sparkler-firework-holiday-wallpaper-preview.jpg" alt="cover" />
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
                </section>
            )}
        </main>
    )
}

export default Home