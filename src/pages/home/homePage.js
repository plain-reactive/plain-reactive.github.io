import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'

class homePage extends PlainComponent {
    constructor() {
        super('home-page', './src/pages/home/homePage.css')
    }

    template() {
        return `
            <div class="home-page">
                <h1>Home Page</h1>
                <p>This is the home page.</p>
            </div>
        `
    }
}

export default customElements.define('home-page', homePage)