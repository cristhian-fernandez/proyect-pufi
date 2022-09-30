import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import SeccionContent from "./SeccionContent";
import styles from './Content.module.css';

function Content() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    if(products.length !== 0){
        return (
            <div>
                {
                    products && products.map (  product => {
                        return (
                            <SeccionContent 
                                key = {product.id}
                                id = {product.id}
                                url = {product.url}
                                title = {product.title}
                                description = {product.description}
                                image_small = {product.image_small}
                                image_big = {product.image_big}

                            />
                        )
                    })
                }
            </div>
        );
    } else {
        return <div className={styles.loading}><h2>Cargando ...</h2><img src={'loading'} alt="loading"/></div>
    }
}

export default Content;