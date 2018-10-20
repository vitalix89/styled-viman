"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
function edge(strings, ...interpolations) {
    return styled_components_1.css `
    @supports (-ms-ime-align: auto) {
      ${styled_components_1.css(strings, ...interpolations)};
    }
  `;
}
exports.edge = edge;
function ie(strings, ...interpolations) {
    return styled_components_1.css `
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${styled_components_1.css(strings, ...interpolations)};
    }
  `;
}
exports.ie = ie;
function tablet(str, ...interpolations) {
    return styled_components_1.css `
    @media only screen and (max-width: 992px) {
      ${styled_components_1.css(str, ...interpolations)};
    }
  `;
}
exports.tablet = tablet;
function mobile(strings, ...interpolations) {
    return styled_components_1.css `
    @media only screen and (max-width: 768px) {
      ${styled_components_1.css(strings, ...interpolations)};
    }
  `;
}
exports.mobile = mobile;
//# sourceMappingURL=index.js.map