import { PlainComponent } from '../../../../vendor/plain-reactive/src/index.js'
import * as hlhs from '../../../../node_modules/highlightjs/highlight.pack.js'

class CodeSnippet extends PlainComponent {
    constructor() {
        super('p-code-snippet', './src/components/base/codeSnippet/CodeSnippet.css')
    }

    formatContent() {
        const rawContent = this.textContent

        let formattedContent = rawContent.split('\n')
        formattedContent = formattedContent.slice(1)
        formattedContent = !formattedContent[formattedContent.length - 1].match(/\s*$/) ? formattedContent : formattedContent.slice(0, -1)

        const initialSpaces = formattedContent[0].match(/^\s*/)[0]

        formattedContent = formattedContent.map(line => {
            line = line.substring(initialSpaces.length)
            line = line.replace(/ /g, '&nbsp;')
            return line
        })

        return formattedContent
    }

    template() {
        return `
            <div class="code-snippet-header">
                <span>index.js</span>
                <span class="copy material-symbols-outlined">content_copy</span>
            </div>
            <div class="code-snippet-body">
                <code class="code">
                    ${this.formatContent().map( (line, index) => {
                        const cleanLine = line.replace(/&nbsp;/g, ' ')
                        return `
                            <div class="line">
                                <span class="line-number">${index + 1}</span>
                                <code class="line-content">${hljs.highlight('javascript', cleanLine).value}</code>
                            </div>
                        `
                    }).join('')}
                </code>
            </div>
        `
    }

    listeners() {
        this.$('.copy').onclick = () => this.copyAllToClipboard()
        this.$$('.line').forEach(line => line.onclick = () => this.copyLineToClipboard(line))
    }

    copyLineToClipboard(line) {
        navigator.clipboard.writeText(line.querySelector('.line-content').textContent)
    }

    copyAllToClipboard() {
        const content = Array.from(this.$('.code').querySelectorAll('.line-content')).map(
            line => line.textContent
        )
        navigator.clipboard.writeText(content.join('\n'))
    }
}

export default customElements.define('p-code-snippet', CodeSnippet)