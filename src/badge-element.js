import { LitElement, html, css } from 'lit';
class Badge extends LitElement {
    static properties = {
      icon: {type: Image},
      title: {type: String},
      openedState: {type: Boolean},
      author: {type: String},
      timeToComplete: {type: Number}
    }


    static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--project-2-badge-list-background-color);
    }
    
    .header{
      background-color: #cfe6f4;
      border-left: 15px soild #3e98d3;
      border: 2px solid black;
      height: 40px;

    }
    `

    constructor() {
      super();
      this.icon=new URL('../assets/open-wc-logo.svg', import.meta.url).href;
      this.title="TESTING"
      this.openedState=false;
    }
    render() {
      return html`
      <div class= wrapper>
        <div class=header>
        <img src=${this.icon}><h1>${this.title}</h1>
      </div>
      <slot>

      </slot>
    </div>
      
      
      `
    
    }


}
customElements.define('badge-element', Badge);