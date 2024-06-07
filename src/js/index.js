import { Router } from './router.js';
import { Cart } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const cartCount = document.getElementById('cart-count');
    const cart = new Cart(cartCount);
    const router = new Router(app, cart);
    router.init();
});

