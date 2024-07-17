import { PlainComponent } from '../../../../vendor/plain-reactive/src/index.js'

class SearchBar extends PlainComponent {
    constructor() {
        super('p-search-bar', './src/components/base/searchBar/SearchBar.css')
    }

    template() {
        return `
            <span class="icon material-symbols-outlined">search</span>
            <input type="text" class="sb-input" placeholder="Search...">
        `
    }
}

export default customElements.define('p-search-bar', SearchBar)