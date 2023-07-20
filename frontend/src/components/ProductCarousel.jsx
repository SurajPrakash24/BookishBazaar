import { Carousel, Image } from 'react-bootstrap';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';

const carouselData = [
  {
    id: 1,
    image: carousel1,
  },
  {
    id: 2,
    image: carousel2,
  },
  {
    id: 3,
    image: carousel3,
  },
];

const ProductCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {carouselData.map((carouselItem) => (
        <Carousel.Item key={carouselItem.id}>
          <a href="#latestprod">
            <Image
              style={{
                resizeMode: 'cover',
                height: '10%',
              }}
              className='carouselImg'
              src={carouselItem.image}
              alt={`Product ${carouselItem.id}`}
              fluid
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;