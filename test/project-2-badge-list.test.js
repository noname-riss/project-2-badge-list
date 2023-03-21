import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/project-2-badge-list.js';

describe('Project2BadgeList', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<project-2-badge-list></project-2-badge-list>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
