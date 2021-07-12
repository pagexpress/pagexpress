import { Quill } from 'vue-quill-editor';

Quill.debug('error');

const Link = Quill.import('formats/link');

class BetterQuillLink extends Link {
  static create(value) {
    const node = super.create(value);
    value = this.sanitize(value);
    node.setAttribute('href', value);

    if (value.startsWith('/') || value.startsWith('#')) {
      node.removeAttribute('target');
      node.removeAttribute('rel');
    }

    return node;
  }
}

export default {
  register: () => Quill.register(BetterQuillLink),
};
