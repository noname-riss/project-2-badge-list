import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    badgeNumber: { 
      type: String 
    },
    backgroundColor: {
        type: String
    },
  }

  static styles = css`
    
    .background {

      background-color: #e9ecf3

    }
    
  `;

  constructor() {
    super();
    this.badgeNumber = '0';
    this.backgroundColor = "#e9ecf6";
  }

  render() {
    return html`
      <div class='background'>
      Badges (${this.badgeNumber})
      
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);