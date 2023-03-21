import { html } from 'lit';
import '../src/project-2-badge-list.js';

export default {
  title: 'Project2BadgeList',
  component: 'project-2-badge-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-2-badge-list
      style="--project-2-badge-list-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-2-badge-list>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
