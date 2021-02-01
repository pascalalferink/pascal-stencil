import { Component, h } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'wb-footer',
  styleUrl: 'wb-footer.css',
  shadow: false,
})
export class WbFooter {

  @Prop() copyright: string;
  @Prop() class: string;

  render() {
    return (
      <footer class={"wb-footer "+ this.class}>
        <div class="wb-container">
          {this.copyright &&
            <div class="wb-footer__copyright">{new Date().getFullYear()} © {this.copyright}</div>
          }
          </div>

          <slot></slot>
      </footer >
    );
  }

}
