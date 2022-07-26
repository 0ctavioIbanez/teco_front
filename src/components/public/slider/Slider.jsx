import useEmblaCarousel from 'embla-carousel-react'
import './slider.css';
import { v4 } from 'uuid';

const Slider = ({ images }) => {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide shadow">
                    {images ? images.map(image =>
                        <img src={image} key={v4()} alt="slider" />
                    )
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider