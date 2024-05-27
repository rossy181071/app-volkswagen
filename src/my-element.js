import { LitElement, css, html } from 'lit'
import './volkswagen-golf'
import './volkswagen-passat'
import './volkswagen-tiguan'
import './volkswagen-beetle'
import './volkswagen-jetta'


export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * The number of page currently displayed
       */
      position: { type: Number },
    }
  }

  constructor() {
    super()
    this.position = 0
  
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 4
    } else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position === 4) {
      this.position = 0
    } else {
      this.position++
    }
  }

  render() {
    return html`
      <div>
    <button @click="${this.setPrevious}">Anterior</button>
    <button @click="${this.setNext}">Siguiente</button>
    <h1>${this.position}</h1>
    ${this.position === 0 ? html` <volkswagen-golf></volkswagen-golf>` : ''}

    ${this.position === 1 ? html` <volkswagen-passat></volkswagen-passat>` : ''}

    ${this.position === 2 ? html` <volkswagen-tiguan></volkswagen-tiguan>` : ''}

    ${this.position === 3 ? html` <volkswagen-beetle></volkswagen-beetle>` : ''}

    ${this.position === 4 ? html` <volkswagen-jetta></volkswagen-jetta>` : ''}

    
      </div>
    
    `
  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      
      }
      

  `
  }
}

window.customElements.define('my-element', MyElement)
