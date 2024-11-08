import { useEffect, useState } from 'react';
import Carousel from './components/Carousel'
import './Products.css'
export default function Products() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const slides = [1, 2, 3, 4, 5]
    return (
        <div className='product-wrapper'>
            <img className="elipse-gradient" src="/src/assets/Ellipse 6.svg" style={{ transform: `translateY(${scrollPosition * 0.3}px)` }} />
            <img className="elipse-border" src="/src/assets/Ellipse 5.svg" style={{ transform: `translateY(${scrollPosition * 0.3}px)` }} />

            <div className='carousel-centering-top'>
                <div className='left-text'>
                    <h1>BBC Premium</h1>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio dignissimos quo saepe, odio quam a nemo nobis amet voluptatum?</h4>
                </div>
                <div className='right-text'>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio dignissimos quo saepe, odio quam a nemo nobis amet voluptatum?</h4>
                </div>

                <Carousel slides={slides} />
            </div>
            <img
                className="elipse-gradient-bottom"
                src="/src/assets/Ellipse 6.svg"
                style={{ transform: `rotate(180deg) translateY(-${scrollPosition * 0.3}px)` }}
            />
            <img
                className="elipse-border-bottom"
                src="/src/assets/Ellipse 5.svg"
                style={{ transform: `rotate(180deg) translateY(-${scrollPosition * 0.3}px)` }}
            />
            <div className='carousel-centering-bottom'>
                <div className='left-text'>
                    <h1>BBC Standard</h1>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio dignissimos quo saepe, odio quam a nemo nobis amet voluptatum?</h4>
                </div>
                <div className='right-text'>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit optio dignissimos quo saepe, odio quam a nemo nobis amet voluptatum?</h4>
                </div>
                <Carousel slides={slides} />
            </div>


        </div>
    )
}