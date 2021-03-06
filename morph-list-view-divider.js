import { LitElement, html, css } from 'lit-element';
import { getPlatform } from '@moduware/lit-utils';

/**
 * `morph-list-view-divider`
 * Divider component for list view
 *
 * @customElement
 * @extends HTMLElement
 * @demo demo/index.html
 */
export class MorphListViewDivider extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          white-space: nowrap;
          position: relative;
          max-width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          z-index: 15;
          box-sizing: border-box;
          overflow: hidden;
          margin-top: -1px;
        }
      
        :host([platform="ios"]) {
          color: #8e8e93;
          display: block;
          height: 31px;
          line-height: 23.8px;
          padding: 4px 15px;
          background: #f7f7f7;
          font-size: 17px;
          font-family: -apple-system, 'SF UI Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
      
        :host([platform="android"]) {
          color: rgba(0, 0, 0, 0.54);
          display: list-item;
          height: 48px;
          line-height: 48px;
          padding: 0px 16px;
          background: rgb(244, 244, 244);
          font-size: 14px;
          font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
        }
      `
    ];
  }


  render() {
    return html`
      <slot></slot>
    `;
  }

  static get is() { return 'morph-list-view-divider'; }
  static get properties() {
    return {
      platform: {
        type: String,
        reflect: true
      }
    };
  }

  /**
   * LitElement lifecycle called once before the first updated() is called
   */
  firstUpdated() {
    super.firstUpdated();
    // check for platform attribute if already set in HTML markup before auto detecting platform and assigning new value
    if (!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }
}

window.customElements.define(MorphListViewDivider.is, MorphListViewDivider);
