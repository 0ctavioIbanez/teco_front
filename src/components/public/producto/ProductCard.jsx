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
                <Slider images={producto?.images} />
            </div>
            <div className="product__card__info d-flex flex-column justify-content-between flex-grow-1">
                <div className=''>
                    <h4 className='product__card__info__title text-center m-0 pt-2'>{producto.nombre}</h4>
                </div>
                <div className='pb-1'>
                    <div className="product__card__price col-6">
                        {/* <h5 className='product__card__price__discount text-right'>${format.number(producto.precio)}</h5> */}
                        <h5 className='product__card__price--main text-center'>${format.number(producto.precio)}</h5>
                    </div>
                    <div className="d-flex align-items-end">
                        <div className="overflow-x pr-0 flex-grow-1 p-0 pl-1">
                            <h5 className='card__subtitle mb-1'>Colores</h5>
                            <div className="d-flex">
                                {producto?.colors?.map((color, c) =>
                                    <div className="product__card__color" key={`color-${color.id}-${c}`} style={{ backgroundColor: color.hex }}></div>
                                )}
                            </div>
                        </div>
                        <div className="border-left d-flex justify-content-center p-0 product__card__fav">
                            <button className="btn__fav btn__fav--flag" onClick={({ target }) => handleFavBtn(target, producto.id)}>
                                <i className="far fa-heart btn__fav--flag"></i>
                                <i className="fas fa-heart btn__fav--flag"></i>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard