import { Home } from './views/home.js';

export class Router {
    constructor(app) {
        this.app = app;
        this.routes = {
            '/': Home,
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
        this.app.appendChild(new Page().render());
    }
}
