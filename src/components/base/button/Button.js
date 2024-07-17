import { PlainComponent } from '../../../../vendor/plain-reactive/src/index.js'

const ButtonType = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark',
    LINK: 'link',
    NORMAL: 'normal',
    SMALL: 'small',
    LARGE: 'large',
    BLOCK: 'block',
    OUTLINE: 'outline',
    ROUNDED: 'rounded',
    CIRCLE: 'circle',
    PILL: 'pill',
    TEXT: 'text',
    ICON: 'icon',
    SLIDE: 'slide',
    FADE: 'fade',
    FLOAT: 'float',
    FIXED: 'fixed',
    ABSOLUTE: 'absolute',
    RELATIVE: 'relative',
    CENTER: 'center',
    RIGHT: 'right',
    LEFT: 'left',
    TOP: 'top',
    BOTTOM: 'bottom',
}

class Button extends PlainComponent {
    constructor() {
        super('p-button', './src/components/base/button/Button.css')
        this.type = this.getAttribute('type') ? this.getAttribute('type') : ButtonType.DEFAULT
        this.icon = this.getAttribute('icon') ? this.getAttribute('icon') : null
        this.active = this.hasAttribute('active') ? true : false
        this.disabled = this.hasAttribute('disabled') ? true : false
    }

    template() {
        console.log(this.disabled)
        return `
            <button class="b-btn ${this.type} ${this.disabled ? `disabled` : ''} ${this.active ? `active` : ''}">
                ${this.icon && `<span class="icon material-symbols-outlined">${this.icon}</span>`}
                <span class="text">${this.textContent}</span>
            </button>
        `
    }

    listeners () {
        this.$('.b-btn').onclick = () => this.handleClick()
      }
    
      handleClick () {
        this.animateClick()
      }
    
      animateClick () {
        this.wrapper.classList.add('clicked')
        this.wrapper.onanimationend = () => this.wrapper.classList.remove('clicked')
      }
}

export default customElements.define('p-button', Button)