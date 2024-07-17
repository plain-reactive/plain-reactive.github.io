import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'
import Menu from '../../components/mid/menu/Menu.js'
import SearchBar from '../../components/base/searchBar/SearchBar.js'
import Button from '../../components/base/button/Button.js'

class HomePage extends PlainComponent {
    constructor() {
        super('home-page', 'src/pages/home/HomePage.css')
        this.hideMenu()
    }

    template() {
        return `
            <header class="hp-header">
                <p-button type="primary" icon="home" active></p-button>
                <p-button type="primary" icon="play_arrow"></p-button>
                <p-search-bar></p-search-bar>
                <p-button type="primary" icon="light_mode" disabled></p-button>
                <!-- Aquí tendríamos el switch de temas -->
            </header>
            
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
