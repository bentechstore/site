export class CartView {
    constructor(cart) {
        this.cart = cart;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = '<h1>Cart</h1><ul id="cart-items"></ul>';
        
        const cartItemsElement = element.querySelector('#cart-items');
        this.cart.getItems().forEach((item, index) => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - $${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                this.cart.removeItem(index);
                this.render();
            });
            itemElement.appendChild(removeButton);
            cartItemsElement.appendChild(itemElement);
        });

        return element;
    }
}
