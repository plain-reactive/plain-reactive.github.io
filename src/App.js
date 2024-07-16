import { PlainComponent } from '../vendor/plain-reactive/src/index.js'
import HomePage from './pages/home/HomePage.js'
import PlaygroundPage from './pages/playground/PlaygroundPage.js'
import NotFoundPage from './pages/404/404Page.js'


class App extends PlainComponent {
    constructor() {
        super('app-root', 'src/App.css')

        this.router = new PlainRouter('https://plain-reactive.site/') // Production
        // this.router = new PlainRouter('http://localhost/plain-reactive.github.io/') // Development
    }

    template() {
        return `
            <home-page></home-page>
        `
    }
}

export default customElements.define('app-root', App)