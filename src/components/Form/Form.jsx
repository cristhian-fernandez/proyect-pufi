import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmailSubscribe } from '../../redux/actions';
import Modal from 'react-bootstrap/Modal';
import styles from './Form.module.css';
function Form() {
    const [input, setInput] = useState({
        email: ""
    });

    const [error, setError] = useState({
        email: ""
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();
    const onInputChange = (e) => {
        e.preventDefault();
        setInput(
            {...input, [e.target.name]:e.target.value}
        );
        setError(
            validateInput({...input, [e.target.name]:e.target.value})
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.entries(error).length === 0){
            const emailSubcribe = {
                email: input.email
            }
            dispatch(sendEmailSubscribe(emailSubcribe));
            setInput({
                email: ""
            });
            setError({
                email: ""
            });
            setShow(true);
        }
    };

    return (
        <>
            <div className={styles.form}>
                <h3>NEWSLETTER</h3>
                <h2>SUSCRIBITE</h2>
                <h4>Y enterate de todas las novedades</h4>
                <form
                    onSubmit={onSubmit}
                    >
                    <div>
                        <input 
                        type="email" 
                        name='email'
                        value={input.email}
                        placeholder='Ingresar tu email' 
                        onChange={onInputChange} className={error.email && styles.danger}/>
                        <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <p className={styles.danger}>{error.email}</p>
                </form>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-circle-check"></i> Suscripción Correcta</Modal.Title>
                </Modal.Header>
                <Modal.Body>Gracias por suscribirte!</Modal.Body>
                <Modal.Footer>
                    <button className={styles.button_modal} onClick={handleClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Form;

export function validateInput (input){
    let error = {};
    if(!input.email){
      error.email = '* Email es requerido';
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
      error.email = '* Email es inválido, ejm: prueba@gmail.com';
    };
    return error;
};