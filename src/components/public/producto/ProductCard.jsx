import './productCard.css'
import Slider from '../../../components/public/slider/Slider';
import { format } from '../../../assets/helpers/utilities';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ producto }) => {
    const navigate = useNavigate();

    const handleFavBtn = (target, id) => {
        const btn = target.classList.contains('fa-heart') ? target.parentElement : target;
        if (btn.classList.contains('fav')) {
            btn.classList.remove('fav');
        } else {
            btn.classList.add('fav');
        }
    };

    const handleNavigate = target => {
        if (target.classList.contains('btn__fav--flag')) {
            return;
        }
        navigate(`/ver/${producto.id}`);
    }

    return (
        <div className="product__card shadow card" onClick={({ target }) => handleNavigate(target)}>
            <div className="product__card__slider">
                <Slider images={producto.images.map(({ image }) => image)} />
            </div>
            <div className="product__card__info">
                <h4 className='product__card__info__title text-center m-0 pt-2'>{producto.nombre}</h4>

                <div className="product__card__price col-6">
                    {/* <h5 className='product__card__price__discount text-right'>${format.number(producto.precio)}</h5> */}
                    <h5 className='product__card__price--main text-center'>${format.number(producto.precio)}</h5>
                </div>
                <div className="d-flex align-items-end">
                    <div className="overflow-x pr-0 col-9 p-0">
                        <h5 className='card__subtitle mb-1'>Colores</h5>
                        <div className="d-flex">
                            {producto.colores.map((color, c) =>
                                <div className="product__card__color" key={`color-${color.id}-${c}`} style={{ backgroundColor: color.hex }}></div>
                            )}
                        </div>
                    </div>
                    <div className="col-3 border-left d-flex justify-content-center p-0">
                        <button className="btn__fav btn__fav--flag" onClick={({ target }) => handleFavBtn(target, producto.id)}>
                            <i className="far fa-heart btn__fav--flag"></i>
                            <i className="fas fa-heart btn__fav--flag"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard