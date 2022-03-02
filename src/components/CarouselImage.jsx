import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import '../styles/carouselItem.css'
import pastelHome1 from '../assets/pastelHome1.jpeg'
import pastelHome2 from '../assets/pastelHome2.jpeg'
import pastelHome3 from '../assets/pastelHome3.jpeg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 460, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 }
];

const CarouselImage = () => {

    const homeImages = [pastelHome1,pastelHome2,pastelHome3]

    return (
        <div className="App">
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                    {homeImages.map((item) => (
                        <Item key={item}><img src={item} alt=''/></Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselImage