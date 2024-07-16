import { PlainComponent, PlainRouter } from '../vendor/plain-reactive/src/index.js'
import homePage from './pages/home/homePage.js'


class pApp extends PlainComponent {
    constructor() {
        super('p-app', 'src/pApp.css')

        this.router = new PlainRouter('https://plain-reactive.site/')
    }

    template() {
        return `
            ${this.router.route({
                '':         '<home-page></home-page>',
                '*':        '<home-page></home-page>',
            })}
        `
    }
}

export default customElements.define('p-app', pApp)