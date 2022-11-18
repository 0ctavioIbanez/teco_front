import "react-responsive-carousel/lib/styles/carousel.min.css";
import './slider.css';
import { Carousel } from 'react-responsive-carousel';
import { v1 } from "uuid";
import chevronNext from '../../../assets/img/icons/chevron-right.svg';
import chevronLeft from '../../../assets/img/icons/chevron-left.svg';

const Slider = ({ images, config, hideButtons }) => {
    const arrowsStyle = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 30px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        border: 'none',
        background: 'rgba(182, 30, 101, .4)',
        backdropFilter: 'blur(5px)',
        borderRadius: '15px'
    }
    const settings = {
        autoPlay: true,
        infiniteLoop: true,
        emulateTouch: true,
        showThumbs: false,
        statusFormatter: () => false,
        renderIndicator: () => false,
        ...config
    };

    const buttonHandler = () => hideButtons ? null : ({
        renderArrowNext: (onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{ right: 15, ...arrowsStyle }}>
                    <img src={chevronNext} alt="next slide" />
                </button>
            ),
        renderArrowPrev: (onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowsStyle, left: 15 }}>
                    <img src={chevronLeft} alt="prev slide" />
                </button>
            )


    });

    return (
        <Carousel
            {...settings}
            {...buttonHandler()}
        >
            {images?.map(image =>
                <div key={v1()}>
                    <img src={image} alt="Slider" />
                </div>
            )}
        </Carousel>
    )
}

export default Slider