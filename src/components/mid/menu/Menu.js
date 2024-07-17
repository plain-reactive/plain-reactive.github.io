import { PlainComponent, PlainState } from '../../../../vendor/plain-reactive/src/index.js'
import MenuItem from '../../base/menuItem/MenuItem.js'

class Menu extends PlainComponent {
    constructor() {
        super('p-menu', './src/components/mid/menu/Menu.css')

        this.selected = new PlainState(null, this)
    }

    template() {
        return `
            <p-menu-item class="item" number="01">Installing Plain</p-menu-item>
            <p-menu-item class="item" number="02">Building your first component</p-menu-item>
            <p-menu-item class="item" number="03">Setting up styles</p-menu-item>
            <p-menu-item class="item" number="04">Adding state with PlainState</p-menu-item>
            <p-menu-item class="item" number="05">Adding signals with PlainSignal</p-menu-item>
            <p-menu-item class="item" number="06">Using contexts with PlainContext</p-menu-item>
            <p-menu-item class="item" number="07">Using router with PlainRouter</p-menu-item>
            <p-menu-item class="item" number="08">Dynamic rendering</p-menu-item>
            <p-menu-item class="item" number="09">Rendering optimization</p-menu-item>
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
                item.navigateTo()
            }
        })
    }
}

export default customElements.define('p-menu', Menu)