import { PlainComponent, PlainState } from '../../../../vendor/plain-reactive/src/index.js'
import MenuItem from '../../base/menuItem/MenuItem.js'

class Menu extends PlainComponent {
    constructor() {
        super('p-menu', './src/components/mid/menu/menu.css')

        this.selected = new PlainState(null, this)
    }

    template() {
        return `
            <p-menu-item class="item" number="1">Installing Plain</p-menu-item>
            <p-menu-item class="item" number="2">Building your first component</p-menu-item>
            <p-menu-item class="item" number="3">Setting up styles</p-menu-item>
            <p-menu-item class="item" number="4">Adding state with PlainState</p-menu-item>
            <p-menu-item class="item" number="5">Adding signals with PlainSignal</p-menu-item>
            <p-menu-item class="item" number="6">Using contexts with PlainContext</p-menu-item>
            <p-menu-item class="item" number="7">Using router with PlainRouter</p-menu-item>
            <p-menu-item class="item" number="8">Dynamic rendering</p-menu-item>
            <p-menu-item class="item" number="9">Rendering optimization and propagation</p-menu-item>
            <p-menu-item class="item" number="10">Lifting state up and props</p-menu-item>
            <p-menu-item class="item" number="11">Good practices</p-menu-item>
            <p-menu-item class="item" number="12">Example project</p-menu-item>
            <p-menu-item class="item" number="13">Roadmap</p-menu-item>
            <p-menu-item class="item" number="14">Version notes</p-menu-item>
        `
    }

    listeners() {
        const items = Array.from(this.wrapper.getElementsByTagName('p-menu-item'))
        items.forEach(item => {
            item.onclick = () => {
                items.forEach(item => item.deselect())
                item.select()
            }
        })
    }
}

export default customElements.define('p-menu', Menu)