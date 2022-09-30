import banner_img01 from './../../assets/img/banner_img01.jpg';
import banner_img02 from './../../assets/img/banner_img02.jpg';
import banner_img03 from './../../assets/img/banner_img03.jpg';

import Carousel from 'react-bootstrap/Carousel';
import styles from './Banner.module.css';
import Button from '../Button/Button';
function Banner() {
    return (
      <div className={styles.banner}>
        <div className={styles.banner_center}>
          <div className={styles.banner_title}>
            <div>ESTÁR TAN CÓMODO,</div>
            <div>NUNCA FUE TAN FÁCIL</div>
          </div>
          <Button title='SHOP' />
        </div>
        <Carousel >
          
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={banner_img01}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={banner_img02}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={banner_img03}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
      );
}

export default Banner;