/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WbFooter {
    'class': string;
    'copyright': string;
  }
}

  declare global {

    interface HTMLWbFooterElement extends Components.WbFooter, HTMLStencilElement { }
    var HTMLWbFooterElement: {
      prototype: HTMLWbFooterElement;
      new(): HTMLWbFooterElement;
    };


    interface HTMLElementTagNameMap {
      'wb-footer': HTMLWbFooterElement;
    }
  }

  declare namespace LocalJSX {
    interface WbFooter {
      'class'?: string;
      'copyright'?: string;
    }

    interface IntrinsicElements {
      'wb-footer': WbFooter;
    }
  }

  export { LocalJSX as JSX };


  declare module "@stencil/core" {
    export namespace JSX {
      interface IntrinsicElements {
        'wb-footer': LocalJSX.WbFooter & JSXBase.HTMLAttributes<HTMLWbFooterElement>;
      }
    }
  }

