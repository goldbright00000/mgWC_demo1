/*

 ----------------------------------------------------------------------------
 | admin-ui: SB2-Admin UI Theme WebComponents Library                        |
 |                                                                           |
 | Copyright (c) 2020 M/Gateway Developments Ltd,                            |
 | Redhill, Surrey UK.                                                       |
 | All rights reserved.                                                      |
 |                                                                           |
 | http://www.mgateway.com                                                   |
 | Email: rtweed@mgateway.com                                                |
 |                                                                           |
 |                                                                           |
 | Licensed under the Apache License, Version 2.0 (the "License");           |
 | you may not use this file except in compliance with the License.          |
 | You may obtain a copy of the License at                                   |
 |                                                                           |
 |     http://www.apache.org/licenses/LICENSE-2.0                            |
 |                                                                           |
 | Unless required by applicable law or agreed to in writing, software       |
 | distributed under the License is distributed on an "AS IS" BASIS,         |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  |
 | See the License for the specific language governing permissions and       |
 |  limitations under the License.                                           |
 ----------------------------------------------------------------------------

 8 March 2020

 */

export function load() {

  let componentName = 'adminui-sidebar-nav-menu-popup';

  class adminui_sidebar_nav_menu_popup extends HTMLElement {
    constructor() {
      super();

      const html = `
<h6 class="collapse-header">Undefined Menu:</h6>
      `;

      this.html = `${html}`;
    }

    connectedCallback() {
      this.innerHTML = this.html;
      this.rootElement = this.getElementsByTagName('h6')[0];
      this.childrenTarget = this.rootElement.parentNode;
      //this.style = 'height: 56px';
    }

    setState(state) {
      if (state.title) this.rootElement.textContent = state.title;
    }

    disconnectedCallback() {
      console.log('*** nav-collapse-menu-popup was removed!');
      if (this.onUnload) this.onUnload();
    }
  }

  customElements.define(componentName, adminui_sidebar_nav_menu_popup);

}
