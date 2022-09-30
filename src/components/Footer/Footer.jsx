import { Link} from 'react-router-dom';
import styles from './Footer.module.css';
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.logo}>Pufi</div>
                <div>
                    <Link to='#'>PUFI RAIN</Link>
                    <Link to='#'>PUFI PUF</Link>
                    <Link to='#'>PUFI CART</Link>
                    <Link to='#'>PUFI NAP</Link>
                </div>
                <div className={styles.line}>
                    <Link to='#'>CONTACTO</Link>
                    <Link to='#'>AYUDA</Link>
                    <Link to='#'>COMO COMPRAR</Link>
                    <Link to='#'>TÉRMINOS Y CONDICIONES</Link>
                </div>
                <div className={`${styles.line} ${styles.footer_seccion}`}>
                    <h4>COMPRA 100% SEGURA</h4>
                    <div>
                        <span><i className="fa-solid fa-qrcode"></i></span>
                        <span><i className="fa-solid fa-shield-halved"></i></span>
                        <h4>COMPRÁ CON LA GARANTIA DE PUFI</h4>
                    </div>
                </div>
                <div className={`${styles.line} ${styles.footer_networks}`}>
                    <span><h4>SIGUENOS EN </h4></span>
                    <Link to='#'><span className={styles.icon}><i className="fa-brands fa-facebook-f"></i></span></Link>
                    <Link to='#'><span className={styles.icon}><i className="fa-brands fa-twitter"></i></span></Link>
                    <Link to='#'><span className={styles.icon}><i className="fa-brands fa-instagram"></i></span></Link>
                </div>
            </div>
            <h4>PUFI Copyright 207 - Todos los derechos reservados</h4>
        </div>
    );
}

export default Footer;