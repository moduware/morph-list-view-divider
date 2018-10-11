import { MorphElement } from '@moduware/morph-element/morph-element.js';
import '@moduware/morph-shared-styles/morph-shared-styles.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `morph-list-view-divider`
 * Divider component for list view
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MorphListViewDivider extends MorphElement(PolymerElement) {
  static get template() {
    return html`
    <style include="morph-shared-styles">
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
      }

      :host([platform="android"]) {
        color: rgba(0, 0, 0, 0.54);
        display: list-item;
        height: 48px;
        line-height: 48px;
        padding: 0px 16px;
        background: rgb(244, 244, 244);
        font-size: 14px;
      }
    </style>
    <slot></slot>
`;
  }

  static get is() { return 'morph-list-view-divider'; }
  static get properties() {
    return {};
  }
}

window.customElements.define(MorphListViewDivider.is, MorphListViewDivider);
