import ButtonMore from '../Button/ButtonMore';
import styles from './Content.module.css';
import Button from '../Button/Button';
function SeccionContent(props) {
    return (
        <div className={styles.seccion}>
            <div className={styles.seccion_item}>
                <img src={props.image_big} alt="lo" className={styles.img_big}/>
                <div className={styles.seccion_button}>
                    <Button title='SHOP' />
                </div>
            </div>
            <div className={styles.seccion_item}>
                <div className={styles.seccion_content}>
                    <img src={props.image_small} alt="" className={styles.img_small}/>
                    <h2>{props.title}</h2>
                    <div className={styles.seccion_line}></div>
                    <p>{props.description}</p>
                    <ButtonMore title='> Ver más'/>
                </div>

            </div>
        </div>
    );
}

export default SeccionContent;