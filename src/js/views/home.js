export class Home {
    constructor(cart) {
        this.cart = cart;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <p>Welcome to the home page!</p>
            <button id="add-item">Add Item to Cart</button>
        `;
        
        element.querySelector('#add-item').addEventListener('click', () => {
            this.cart.addItem({ name: 'Item 1', price: 10 });
        });

        return element;
    }
}
