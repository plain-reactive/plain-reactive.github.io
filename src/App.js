import { PlainComponent, PlainRouter } from '../vendor/plain-reactive/src/index.js'
import HomePage from 'src/pages/home/HomePage.js'
import PlaygroundPage from 'src/pages/playground/PlaygroundPage.js'
import NotFoundPage from 'src/pages/404/404Page.js'


class App extends PlainComponent {
    constructor() {
        super('app-root', 'src/App.css')

        this.router = new PlainRouter('https://plain-reactive.site/') // Production
        // this.router = new PlainRouter('http://localhost/plain-reactive.github.io/') // Development
    }

    template() {
        return `
            ${this.router.route({
                '':                 '<home-page></home-page>',
                'playground':       '<playground-page></playground-page>',
                '*':                '<not-found-page></not-found-page>',
            })}
        `
    }
}

export default customElements.define('app-root', App)