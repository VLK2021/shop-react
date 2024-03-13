export const urls = {
    products: (word, page) => `/products?_page=${page}&_limit=9&${word}`,
    singleProduct: (id) => `/products/${id}`,
    categories: () => `/categories`,
    brands: () => '/brands',
}