import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'
import Menu from '../../components/mid/menu/Menu.js'

class HomePage extends PlainComponent {
    constructor() {
        super('home-page', 'src/pages/home/HomePage.css')
    }

    template() {
        return `
            <p-menu></p-menu>
        `
    }
}

export default customElements.define('home-page', HomePage)
