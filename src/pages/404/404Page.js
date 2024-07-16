import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'

class NotFoundPage extends PlainComponent {
    constructor() {
        super('not-found-page', 'src/pages/404/404Page.css')
    }

    template() {
        return `
            <div class="not-found-page">
                <h1>404</h1>
                <p>This is the 404 page.</p>
            </div>
        `
    }
}

export default customElements.define('not-found-page', NotFoundPage)