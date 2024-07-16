import { PlainComponent } from '../vendor/plain-reactive/src/index.js'

class pApp extends PlainComponent {
    constructor() {
        super('p-app', 'src/pApp.css')
    }

    template() {
        return `
            <h1>App</h1>
        `
    }
}

export default customElements.define('p-app', pApp)