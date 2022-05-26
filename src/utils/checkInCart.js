export const checkInCart = (cart, productId) => {
    return !!cart.find(item => item.id === productId)
}
