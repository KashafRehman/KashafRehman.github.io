document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.querySelector('.cart__items');
    let total = 0;

    cartItems.forEach(item => {
        cartList.innerHTML += `
            <div class="cart__item">
                <img src="${item.image}" alt="${item.name}" class="cart__item-img">
                <div class="cart__item-details">
                    <p class="cart__item-name">${item.name}</p>
                    <p class="cart__item-price">$${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        total += item.price;
    });
    

    document.querySelector('.cart__total').textContent = `Total: $${total.toFixed(2)}`;
});
