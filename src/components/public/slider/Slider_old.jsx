import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './slider.css';
import { v4 } from 'uuid';

const Slider = ({ images, thumbs, config }) => {
    const options = { delay: 1500 }
    const autoplay = Autoplay(options);
    let settings = [];
    const _images = [
        "data:image/png;base64, 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"
    ]

    const setConfiguration = () => {
        // if (!config) {
        //     return
        // }
        // if (config.autoplay) {
        //     settings.push(autoplay);
        // }

        // if (emblaAPI) {
        //     emblaAPI.reInit();
        // }
    }

    const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true }, []);

    useEffect(() => {
        console.log(images);
      setConfiguration();
    }, [config, emblaAPI])
    

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {_images ? images.map(image =>
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