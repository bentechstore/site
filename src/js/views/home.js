export class Home {
    render() {
        const element = document.createElement('div');
        element.innerHTML = '<h1>Home</h1><p>Welcome to the home page!</p>';
        return element;
    }
}
