import { useProdsStore } from './productStore.js'



export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(getProds=>{
             return getProds
            })
}

export const getSingleProd = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(getOneProd=>{
                
             return getOneProd
            })
}

export const getSortedProds=() => {
    return fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(getSorted=>{
             return getSorted
            })
}

export const getCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(getCats=>{
             return getCats
            })
}

export const getOneCategory = (selectedCat) => {
    
    return fetch(`https://fakestoreapi.com/products/category/${selectedCat}`)
    .then(res=>res.json())
    .then(getOneCat=>{
     return getOneCat
    })
    
}

export const getCart = () => {
    //console.log('cart is here')
    return fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(getCarts=>{
             return getCarts
            })
}




