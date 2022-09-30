import styles from './Button.module.css';
function ButtonMore(props) {
    return (
        <button className={styles.buttonMore}>
            {props.title}
        </button>
    );
}

export default ButtonMore;