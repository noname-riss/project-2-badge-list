import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement {
  static properties = {
    badgeNumber: { 
      type: String 
    },
    badges: {type: Array}
  }



 

  static styles = css`
    
    .background {

      background-color: #e9ecf3

    }
    
  `;

  constructor() {
    super();
    this.badgeNumber = '5';
    this.badges=[];
    this.updateClasses();
  }
  
  updateClasses() {
    const address = new URL('../api/badge-catalog.js',import.meta.url).href;
   fetch(address).then((response) =>{
         return response.json();
     }).then((data)=>{
    this.classes = data;
    });
    }

  render() {
    return html`
      <div class='background'>
      Badges (${this.badgeNumber})
       ${this.badges.map(badgeElement => html`
       <badge-element titleIcon="${badgeElement.titleIcon}" title="${badgeElement.title}" paragraph="${badgeElement.paragraph}" author="${badgeElement.author}" timeToComplete="${badgeElement.timeToComplete}" collapseIcon="${badgeElement.collapseIcon}" opened="${badgeElement.opened}"></badge-element>
       
       `)}
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);