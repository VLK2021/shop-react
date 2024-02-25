import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const productsService = {
    getAllCategories: () => axiosService.get(urls.categories()).then(value => value.data),
}