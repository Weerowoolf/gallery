import React from 'react';
import ModalImage from 'react-modal-image';
import Slider from 'react-slick';
import './Gallery.css';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { id: 1, src: '/images/1.jpg', alt: 'Вода' },
    { id: 2, src: '/images/2.jpg', alt: 'Лес' },
    { id: 3, src: '/images/3.jpg', alt: 'Горы' },
    { id: 4, src: '/images/4.jpg', alt: 'Пустыня' },
    { id: 5, src: '/images/5.jpg', alt: 'Небо' },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Галерея Природы</h2>
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <ModalImage
              small={image.src}
              large={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;




