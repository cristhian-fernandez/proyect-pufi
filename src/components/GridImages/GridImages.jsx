import img_cart_big from './../../assets/img/img_cart_big.jpg';
import img_nap_big from './../../assets/img/img_nap_big.jpg';
import img_rain_big from './../../assets/img/img_rain_big.jpg';
import img_puff_big from './../../assets/img/img_puff_big.jpg';
import img_puff_big02 from './../../assets/img/img_puff_big02.jpg';
import img_puff_big03 from './../../assets/img/img_puff_big03.jpg';
import styles from './GridImages.module.css';

function GridImages() {
    return (
        <div className={styles.gridImages}>
            <h3>INSTAGRAM</h3>
            <h2>#ESPUFI</h2>
            <div className={styles.grid}>
                <img src={img_cart_big} alt="img_cart" />
                <img src={img_nap_big} alt="img_nap" />
                <img src={img_rain_big} alt="img_rain" />
                <img src={img_puff_big} alt="img_puff" />
                <img src={img_puff_big02} alt="img_puff" />
                <img src={img_puff_big03} alt="img_puff" />
            </div>
        </div>
    );
}

export default GridImages;