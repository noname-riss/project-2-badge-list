import { LitElement, html, css } from 'lit';
import "./search-bar.js";
class BadgeList extends LitElement {
  static properties = {
    badgeNumber: { 
      type: String 
    },
    badges: {type: Array}
  }



 

  static styles = css`
    
  `;

  constructor() {
    super();
    this.badgeNumber = 5;
    this.badges=[];
    this.updateClasses();
    this.getSearchResults().then((results) => {
      this.badges = results;
  });
  }
  
  updateClasses() {
    const address = '/api/badge-catalog';
   fetch(address).then((response) =>{
    if(response.ok){
      return response.json();
    }
         return [];
     }).then((data)=>{
    this.badges = data;
    });
    }


    async getSearchResults(value = '') {
      const address = `/api/roster?search=${value}`;
      const results = await fetch(address).then((response) => {
          if (response.ok) {
              return response.json()
          }
          return [];
      })
      .then((data) => {
          return data;
      });

      return results;
  }

  async _handleSearchEvent(e) {
      const term = e.detail.value;
      this.badges.opened = await this.getSearchResults(term).opened;
  }


  render() {
    return html`
      <div>
      Badges (${this.badgeNumber})
       ${this.badges.map(badgeElement => html`
       <badge-element titleIcon="${badgeElement.titleIcon}" title="${badgeElement.title}" paragraph="${badgeElement.paragraph}" author="${badgeElement.author}" timeToComplete="${badgeElement.timeToComplete}" collapseIcon="${badgeElement.collapseIcon}" opened="${badgeElement.opened}" stepsToComplete="${badgeElement.stepsToComplete}"></badge-element>
       `)}
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);