import { render } from '@wordpress/element';

function MyPlugin() {
  return <span>Hello from JavaScript! And all my edits</span>;
}npm 

window.addEventListener(
  'load',
  function () {
    render(<MyPlugin />, document.querySelector('#my-plugin'));
  },
  false
);
