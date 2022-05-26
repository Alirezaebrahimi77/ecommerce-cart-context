export const getCartTotal = (cart) => {
    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)

    return total.toFixed(2);
}