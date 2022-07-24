import './home.css'
import Slider from '../../../components/public/slider/Slider'

const Home = () => {

    return (
        <main className='main'>
            <div className="home__slider">
                <Slider />
            </div>
            <section className='home__section'>
                <div className="home__departamento home__slider">
                    <img src="https://c4.wallpaperflare.com/wallpaper/540/853/301/girl-street-sparkler-firework-holiday-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="home__categorias py-2 pt-4 overflow-x d-flex">
                    <div className="home__categorias__item">
                        <div className="card">
                            <img src="https://cdn.shopify.com/s/files/1/2100/3755/products/Women_s-Active-Sports-Socks-White-Front.jpg?v=1614791239" className='shadow' alt="" />
                            <h4 className='home__categorias__item__name'>Pantimedia gruesa</h4>
                        </div>
                    </div>
                    <div className="home__categorias__item">
                        <div className="card">
                            <img src="https://cdn.shopify.com/s/files/1/2100/3755/products/Women_s-Active-Sports-Socks-White-Front.jpg?v=1614791239" className='shadow' alt="" />
                            <h4 className='home__categorias__item__name'>Pantimedia gruesa</h4>
                        </div>
                    </div>
                    <div className="home__categorias__item">
                        <div className="card">
                            <img src="https://cdn.shopify.com/s/files/1/2100/3755/products/Women_s-Active-Sports-Socks-White-Front.jpg?v=1614791239" className='shadow' alt="" />
                            <h4 className='home__categorias__item__name'>Pantimedia gruesa</h4>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home