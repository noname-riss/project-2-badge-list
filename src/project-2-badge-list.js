import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";




class Project2BadgeList extends LitElement {
  static properties = {
    badgeNumber: { 
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
  }

  render() {
    return html`
      <div class='background'>
      Badges (${this.badgeNumber})
      
      </div>
    `;
  }
}

customElements.define('project-2-badge-list', Project2BadgeList);