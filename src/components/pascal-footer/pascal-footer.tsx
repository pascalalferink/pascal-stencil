import { Component, h } from '@stencil/core';
import { Prop } from '@stencil/core';

@Component({
  tag: 'pascal-footer',
  styleUrl: 'pascal-footer.css',
  shadow: false,
})
export class WbFooter {

  @Prop() copyright: string;
  @Prop() class: string;

  render() {
    return (
      <footer class={"pascal-footer "+ this.class}>
        <div class="pascal-container">
          {this.copyright &&
            <div class="pascal-footer__copyright">{new Date().getFullYear()} © {this.copyright}</div>
          }
          </div>

          <slot></slot>
      </footer >
    );
  }

}
