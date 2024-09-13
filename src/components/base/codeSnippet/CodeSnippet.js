import { PlainComponent } from '../../../../vendor/plain-reactive/src/index.js'

class CodeSnippet extends PlainComponent {
    constructor() {
        super('p-code-snippet', '/src/components/base/codeSnippet/CodeSnippet.css')
    }

    template() {
        return `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/default.min.css">
        <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
            <pre class="code-snippet">
                <code class="language-javascript">
                    ${this.textContent}
                </code>
            </pre>
        `
    }
}

export default customElements.define('p-code-snippet', CodeSnippet)