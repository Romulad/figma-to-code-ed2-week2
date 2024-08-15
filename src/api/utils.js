

export const getCollectionQuery = (colectionId) => {
    return `query={collection(id: "${colectionId}") {
        products(first: 16) {
            edges {
            node {
            id
            title
            description
            featuredImage {
                altText
                url
            }
            priceRange {
                minVariantPrice {
                amount
                currencyCode
                }
            }
            variants(first: 8) {
                edges {
                    node {
                        id
                        title
                        image {
                            altText
                            url
                        }
                        price {
                            amount
                            currencyCode
                        }
                        selectedOptions {
                            name
                            value
                        }
                    }
                }
            }
        }
    }}}}`
}

export const getRecommendationsQuery = (productId) => {
    return `query={productRecommendations(productId: "${productId}") {
        title
        id
        description
        featuredImage {
            altText
            url
        }
        priceRange {
            minVariantPrice {
                amount
                currencyCode
            }
        }
    }}`
}

export const getProductQuery = (productId) => {
    return `query={product(id: ${productId}) {
        id
        title
        description
        priceRange{
            minVariantPrice{
                amount
            }
        }
        featuredImage {
            id
            url
        }
        variants(first: 50) {
        nodes {
            id
            title
            price {
                amount
            }
            image {
                url
            }
            selectedOptions {
                name
                value
            }
            product {
            id
            title
            description
            priceRange{
                minVariantPrice{
                    amount
                }
            }
            featuredImage {
                id
                url
            }
            }
        }
        }
    }
    }
`}