import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'
import Menu from '../../components/mid/menu/Menu.js'
import SearchBar from '../../components/base/searchBar/SearchBar.js'
import Button from '../../components/base/button/Button.js'
import CodeSnippet from '../../components/base/codeSnippet/codeSnippet.js'

class HomePage extends PlainComponent {
    constructor() {
        super('home-page', 'src/pages/home/HomePage.css')
        this.hideMenu()
    }

    template() {
        const navBar = `
            <nav class="hp-menu-bar">
                <div class="movable start">
                    <p-menu></p-menu>
                </div>
                <div class="fade start"></div>
            </nav>
        `
        return `
            <header class="hp-header">
                <h3 class="hp-header-logo">Plain</h3>
                <p-search-bar></p-search-bar>
                <div class="hp-header-buttons">
                    <p-button type="primary" icon="home" active></p-button>
                    <p-button type="primary" icon="play_arrow"></p-button>
                </div>
                <p-button type="primary" icon="light_mode" disabled></p-button>
                <!-- Aquí tendríamos el switch de temas -->
            </header>

            <div class="hp-body">
                <p-code-snippet>
                    async hideMenu() {
                        setTimeout(() => {
                            this.$('.movable').classList.remove('start')
                            this.$('.fade').classList.remove('start')
                        }, 1500)
                    }
                </p-code-snippet>
            </div>
        `
    }

    async hideMenu() {
        /* setTimeout(() => {
            this.$('.movable').classList.remove('start')
            this.$('.fade').classList.remove('start')
        }, 1500) */
    }
}

export default customElements.define('home-page', HomePage)
