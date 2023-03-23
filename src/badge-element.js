import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
class Badge extends LitElement {
    static properties = {
      icon: {type: Image},
      title: {type: String},
      openedState: {type: Boolean},
      author: {type: String},
      timeToComplete: {type: Number}
    }


    static styles = css`
   

    .wrapper{
      display: inline-flex;
    }

    .header{
      background-color: #cfe6f4;
      border-left: 150px soild #3e98d3;
      border: 2px soild black;
      display: flex;
  
    }

    .collapse{
      flex-direction: right;
    }

    .title{
      color: #333333;
      font-size: 14px;
      font-family: "effra", sans-serif;
      flex-direction: left;
    }

    .badgeIcon{
      height: 40px;
      flex-direction: left;
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
        <img class="badgeIcon" src=${this.icon}><h1 class="title">${this.title}</h1><details class="collapse"></details>
      </div>
      <slot>

      </slot>
    </div>
      
      
      `
    
    }


}
customElements.define('badge-element', Badge);