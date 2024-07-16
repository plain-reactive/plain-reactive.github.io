import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'

class PlaygroundPage extends PlainComponent {
    constructor() {
        super('playground-page', 'src/pages/playground/PlaygroundPage.css')
    }

    template() {
        return `
            <div class="playground-page">
                <h1>Playground Page</h1>
                <p>This is the playground page.</p>
            </div>
        `
    }
}

export default customElements.define('playground-page', PlaygroundPage)