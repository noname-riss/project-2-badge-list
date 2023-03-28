import { LitElement, html, css } from 'lit';

class BadgeList extends LitElement {
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
    this.badgeNumber = '5';
  }

  render() {
    return html`
      <div class='background'>
      Badges (${this.badgeNumber})
        <badge-element>
        </badge-element>
        <badge-element>
        </badge-element>
        <badge-element>
        </badge-element>
        <badge-element>
        </badge-element>
        <badge-element>
        </badge-element>
      </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);