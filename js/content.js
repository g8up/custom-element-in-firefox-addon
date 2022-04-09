const style = `
<style>
  div{
    background: pink;
  }
</style>`;

const template = document.createElement('template');

template.innerHTML = `${style} <div> Great! </div>`;

class TamperElement extends HTMLElement {
  constructor() {
    super();
  }

  show() {
    alert('hi');
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'open',
    });
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

const ROOT_TAG = 'web-extension';

window.customElements.define(ROOT_TAG, TamperElement);

const newTag = document.createElement(ROOT_TAG, {

});

newTag.setAttribute('data-info', 'for test');

document.body.insertBefore(newTag, document.body.firstChild);

// invoke
document.querySelector(ROOT_TAG).show();