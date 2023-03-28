import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
class Badge extends LitElement {
    static properties = {
      icon: {type: Image},
      title: {type: String},
      paragraph:{type: String},
      author: {type: String},
      timeToComplete: {type: Number}
    }


    static styles = css`
   

    .wrapper{
      padding: 10px;

    }

    .header{
     display: flex;
     background-color: #cfe6f4;
    }

    .collapse{
      color: #333333;
      font-size: 14px;
      font-family: "effra", sans-serif;
      border-left: 15px solid #3e98d3;
    border-top: 2px solid #3e98d3;
    border-bottom:2px solid #3e98d3;
    border-right:2px solid #3e98d3;
    }

    .title{
      color: #333333;
      font-size: 14px;
      font-family: "effra", sans-serif;
      flex-direction: left;
      margin-right:auto;
    }

    .badgeIcon{
      height: 40px;
      flex-direction: left;
    }

    .slotWrapper{
      background-color:white;
    }

    `

    constructor() {
      super();
      this.icon=new URL('../assets/open-wc-logo.svg', import.meta.url).href;
      this.title="TESTING"
      this.openedState=false;
      this.paragraph="This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph."
      this.author="Ryan"
      this.timeToComplete=2.8;
    }
    render() {
      return html`
      <div class="wrapper"> 
      <details class="collapse">
          <summary class="header"> <img class="badgeIcon" src=${this.icon}><h1 class="title">${this.title}</h1></summary>
         
          <div class="slotWrapper">
           <slot>
        ${this.paragraph}
        ${this.author}
        ${this.timeToComplete}
      </slot>
      </div>
    </details>
  
    
    </div>
      
      
      `
    
    }


}
customElements.define('badge-element', Badge);