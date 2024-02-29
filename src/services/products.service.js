import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const productsService = {
    getAllCategories: () => axiosService.get(urls.categories()).then(value => value.data),
    getAllBrands: () => axiosService.get(urls.brands()).then(value => value.data),
    getAllProducts: (page) => axiosService.get(urls.products(page)).then(value => value.data),

    getTotalPagesProducts: (page) => axiosService.get(urls.products(page)).then(value => value.headers['x-total-count']),
}