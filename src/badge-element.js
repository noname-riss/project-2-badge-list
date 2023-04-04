import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Badge extends LitElement {
    static properties = {
      titleIcon: {type: Image},
      title: {type: String},
      paragraph:{type: String},
      author: {type: String},
      timeToComplete: {type: Number},
      collapseIcon: {type: String},
      opened: {type: Boolean, reflect: true}
    }




  

    toggleEvent(e){
      
      const state=this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
  
      console.log(state);
      this.opened=state;

      if(this.opened===true)
      {
        this.collapseIcon="arrow-drop-down";
      }
      else if(this.opened===false){
        this.collapseIcon="arrow-drop-up";
      }
      
    }
  
  
  updated(changedProperties){
    changedProperties.forEach((oldValue,propName) => {
      if(propName==="opened"){
        this.dispatchEvent(new CustomEvent('opened-changed',{
          composed: true,
          bubbles: true,
          cancelable: true,
          detail:{
            value: this[propName]
          }
        }))
  
      }
    });
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
      this.titleIcon=new URL('../assets/open-wc-logo.svg', import.meta.url).href;
      this.title="TESTING"
      this.openedState=false;
      this.paragraph="This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph.This is the testing paragraph."
      this.author="Ryan"
      this.timeToComplete=2.8;
      this.opened=false;
      this.collapseIcon= "arrow-drop-up";
    }

    render() {
      return html`
      <div class= "wrapper"> 
      <details class="collapse" .open='${this.opened}' @toggle=${this.toggleEvent}>
      
          <summary class="header"> <img class="badgeIcon" src=${this.titleIcon}><h1 class="title">${this.title}</h1><simple-icon icon="${this.collapseIcon}"></simple-icon></summary>
         
          <div class="slotWrapper">
           <slot>
        <p>${this.paragraph}</p>
        <p>Author: ${this.author}</p>       
        <p>Time to complete: ${this.timeToComplete} hrs</p>
      </slot>
      </div>
    </details>
    </div>
      `
    }


}
customElements.define('badge-element', Badge);