import { Home } from './views/home.js';
import { CartView } from './views/cart.js';

export class Router {
    constructor(app, cart) {
        this.app = app;
        this.cart = cart;
        this.routes = {
            '/': Home,
            '/carrinho': CartView,
        };
    }

    init() {
        window.addEventListener('hashchange', () => this.route());
        this.route();
    }

    route() {
        const path = window.location.hash.slice(1) || '/';
        const Page = this.routes[path] || Home;
        this.app.innerHTML = '';
        this.app.appendChild(new Page(this.cart).render());
    }
}
