export const urls = {
    products: (page) => `/products?_page=${page}&_limit=9`,
    categories: () => `/categories`,
    brands: () => '/brands',
    search: (word, page) => `/products?_page=${page}&_limit=9&${word}`,
}