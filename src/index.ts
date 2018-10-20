import { css, Interpolation } from 'styled-components';

export function edge<P>(strings: TemplateStringsArray, ...interpolations: Array<Interpolation<P>>) {
  return css`
    @supports (-ms-ime-align: auto) {
      ${css(strings, ...interpolations)};
    }
  `;
}

export function ie<P>(strings: TemplateStringsArray, ...interpolations: Array<Interpolation<P>>) {
  return css`
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${css(strings, ...interpolations)};
    }
  `;
}

export function tablet<P>(str: TemplateStringsArray, ...interpolations: Array<Interpolation<P>>) {
  return css`
    @media only screen and (max-width: 992px) {
      ${css(str, ...interpolations)};
    }
  `;
}

export function mobile<P>(strings: TemplateStringsArray, ...interpolations: Array<Interpolation<P>>) {
  return css`
    @media only screen and (max-width: 768px) {
      ${css(strings, ...interpolations)};
    }
  `;
}
