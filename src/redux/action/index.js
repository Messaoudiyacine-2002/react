// for add item to cart 
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product 
    }
}

// for del item to cart 
export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product 
    }
}
