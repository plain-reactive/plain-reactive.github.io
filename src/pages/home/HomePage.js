import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'
import Menu from '../../components/mid/menu/Menu.js'

class HomePage extends PlainComponent {
    constructor() {
        super('home-page', 'src/pages/home/HomePage.css')
        this.hideMenu()
    }

    template() {
        return `
            <nav class="hp-menu-bar">
                <div class="movable start">
                    <p-menu></p-menu>
                </div>
                <div class="fade start"></div>
            </nav>
        `
    }

    async hideMenu() {
        setTimeout(() => {
            this.$('.movable').classList.remove('start')
            this.$('.fade').classList.remove('start')
        }, 1500)
    }
}

export default customElements.define('home-page', HomePage)
