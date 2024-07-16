import { PlainComponent } from '../../../../vendor/plain-reactive/src/index.js'

class MenuItem extends PlainComponent {
    constructor() {
        super('p-menu-item', './src/components/base/menuItem/MenuItem.css')
    }

    template() {
        return `
            <span class="pmi-number">${this.getAttribute('number')}</span>
            <span class="pmi-text">${this.textContent}</span>
        `
    }

    navigateTo() {
        window.location.href = this.getAttribute('href') ? this.getAttribute('href') : '#'
    }

    select() {
        this.wrapper.classList.add('selected')
    }

    deselect() {
        this.wrapper.classList.remove('selected')
    }
}

export default customElements.define('p-menu-item', MenuItem)