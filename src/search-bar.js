import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
  
  }

 

  static styles = css`
   
   .form-control {
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    display: block;
    width: 50%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    margin-bottom: 6em;
}
  `;
  
  

  constructor() {
    super();
  

  }
  

  render() {
    return html`


    <input class="form-control" type="search" id="site-search" name="q" placeholder = "Search Content, Topics, and People">

  


    `;
  }
}

customElements.define('search-bar', SearchBar);