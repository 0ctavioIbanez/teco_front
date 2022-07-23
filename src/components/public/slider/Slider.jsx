import useEmblaCarousel from 'embla-carousel-react'
import './slider.css';

const Slider = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide shadow">
                    <img src="https://images.pexels.com/photos/1046287/pexels-photo-1046287.jpeg" alt="" />
                </div>
                <div className="embla__slide shadow">
                    <img src="https://images.pexels.com/photos/6492824/pexels-photo-6492824.jpeg" alt="" />
                </div>
                <div className="embla__slide shadow">
                    <img src="https://images.pexels.com/photos/923447/pexels-photo-923447.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider