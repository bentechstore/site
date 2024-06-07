export class Cart {
    constructor(cartCountElement) {
        this.items = [];
        this.cartCountElement = cartCountElement;
    }

    addItem(item) {
        this.items.push(item);
        this.updateCartCount();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCartCount();
    }

    updateCartCount() {
        this.cartCountElement.textContent = this.items.length;
    }

    getItems() {
        return this.items;
    }
}
