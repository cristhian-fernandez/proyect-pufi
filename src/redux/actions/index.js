import {
    GET_PRODUCTS
} from "../constants/";

import axios from "axios";

const urlApi = 'api/data.json';
const urlEmail = 'https://formspree.io/f/mqkjbkvl';

export const getProducts = () => {
    return async (dispatch) => {
        axios.get(urlApi)
        .then(responde => {
            dispatch({
                type : GET_PRODUCTS,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}

export const sendEmailSubscribe = (values) => {
    return async () => {
        axios.post(urlEmail, values)
        .catch( e => console.log(e));
    }
}