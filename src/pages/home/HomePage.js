import { PlainComponent } from '../../../vendor/plain-reactive/src/index.js'
import Menu from '../../components/mid/menu/Menu.js'
import SearchBar from '../../components/base/searchBar/SearchBar.js'
import Button from '../../components/base/button/Button.js'
import CodeSnippet from '../../components/base/codeSnippet/CodeSnippet.js'

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

            <main class="hp-body">

                <!-- 1. INSTALLATION -->
                <section class="hp-section" id="installation">

                    <h2>Installing <b>Plain</b></h2>

                    <h3>NPM package</h3>

                    <p>To install Plain, you can use npm.</p>
                    <p-code-snippet lang="shell">
                        npm install plain-reactive
                    </p-code-snippet>

                    <p>Then you can import Plain classes in your component files.</p>
                    <p-code-snippet lang="javascript">
                        import { PlainComponent } from 'plain-reactive'
                    </p-code-snippet>

                    <p>If you're not using a resolver you should import it with a relative path. Like this :</p>
                    <p-code-snippet lang="javascript">
                        import { PlainComponent } from 'node_modules/plain-reactive/src/index.js'
                    </p-code-snippet>

                    <h3>CDN</h3>

                    <p>You can also import it with a CDN :</p>
                    <p-code-snippet lang="html">
                        &lt;script type="module" src="https://cdn.jsdelivr.net/gh/KinoGlazPrusia/plain@main/src/index.js"&gt;&lt;/script&gt;
                    </p-code-snippet>
                    <span class="hp-note">
                    * Notice that the version is not specified. 
                    It will be the latest version. 
                    It is only recommended for simple components because some bugs have been reported.
                    </span>

                    <h3>Repository</h3>

                    <p>
                    Lastly, you can download the repo directly from <a href="https://github.com/KinoGlazPrusia/plain">GitHub</a> 
                    and place it wherever you want in your project.
                    </p>
                    <p-code-snippet lang="shell">
                        git clone https://github.com/KinoGlazPrusia/plain.git
                    </p-code-snippet>
                    <br>
                    <p-code-snippet lang="javascript">
                        import { PlainComponent } from 'vendor/plain-reactive/src/index.js'
                    </p-code-snippet>
                    <span class="hp-note">* Remember to give me a star if you like it!</span>
                   
                </section>

                <section class="hp-section" id="getting-started">

                    <h2>Building your <b>first component</b></h2>

                    <p>
                    Ok! Now you're ready to start using <b>Plain</b>. 
                    Through this guide, we'll make some recommendations to help you follow the best practices.
                    Just so you know what can you do, this site is build using Plain components. Go ahead and check it out!
                    </p>

                    <h3>1. Create a folder containing 2 files</h3>

                    <p>
                    One of the main goals while writing this library is to make it as <b>modular</b> and <b>self-contained</b> as possible. 
                    That's why we try to encapsulate all the components in a folder with <b>2 files</b> in it. 
                    One <b>.js</b> for the component and one <b>.css</b> for the styles.
                    </p>

                    <p-code-snippet lang="shell">
                        + myComponent
                            - myComponent.css
                            - myComponent.js
                    </p-code-snippet>

                    <h3>2. Initialize the component</h3>
                    <p>
                    You have to initialize the component by providing a <b>name</b> and specifying the <b>path to its stylesheet</b>.
                    </p>

                    <p-code-snippet lang="javascript">
                        class MyComponent extends PlainComponent {
                            constructor() {
                                super('my-component', 'myComponent/myComponent.css')
                            }
                        }
                    </p-code-snippet>
                    <span class="hp-note">
                    * Note that the css path will be relative to the entry point of the app.
                    </span>

                </section>

            </main>
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
