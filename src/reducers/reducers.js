const reducer = (state = {}, action = {}) => {
    switch(action.type) {
        case 'buy' : {
            // Membuat salinan dari state.basket jika ada, atau array kosong jika tidak ada
            const basket = state.basket ? [...state.basket] : []
            
            // Mencari indeks item dalam basket yang memiliki productId yang sama dengan action.payload.productId
            const existing = basket.findIndex((item) => item.productId === action.payload.productId)
    
            if(existing !== -1) {
                // Jika item sudah ada dalam basket, tambahkan quantity-nya
                basket[existing].quantity = basket[existing].quantity + 1
            } else {
                // Jika item belum ada dalam basket, tambahkan item baru dengan quantity 1
                basket.push({ quantity: 1, ...action.payload })
            }
    
            // Mengembalikan state baru dengan basket yang telah diperbarui
            return {
                ...state,
                basket
            }
        }
        case 'clearBasket' :
            return {
                ...state,
                basket: []
            }
        default:
            return { ...state }    
    }
}

export default reducer