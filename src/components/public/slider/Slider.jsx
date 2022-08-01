import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './slider.css';
import { v4 } from 'uuid';

const Slider = ({ images, thumbs, config }) => {
    const options = { delay: 1500 }
    const autoplay = Autoplay(options);
    let settings = [];

    const setConfiguration = () => {
        if (!config) {
            return
        }
        if (config.autoplay) {
            settings.push(autoplay);
        }

        if (emblaAPI) {
            emblaAPI.reInit();
        }
    }

    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true }, settings);

    useEffect(() => {
      setConfiguration();
    }, [config, emblaAPI])
    

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {images ? images.map(image =>
                    <div className="embla__slide shadow" key={v4()}>
                        <img src={image} alt="slider" />
                    </div>
                )
                    : null
                }
            </div>
        </div>
    )
}

export default Slider