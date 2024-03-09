export const urls = {
    products: (word, page) => `/products?_page=${page}&_limit=9&${word}`,
    categories: () => `/categories`,
    brands: () => '/brands',
}