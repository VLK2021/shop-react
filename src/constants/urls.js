export const urls = {
    // products: (page) => `/products?_page=${page}&_limit=9`,
    products: (word, page) => `/products?_page=${page}&_limit=9&q=${word}`,
    categories: () => `/categories`,
    brands: () => '/brands',
    search: (word, page) => `/products?_page=${page}&_limit=9&q=${word}`,
}