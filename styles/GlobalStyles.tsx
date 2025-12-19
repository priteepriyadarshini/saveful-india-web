import { css } from '@emotion/css';
import { Global } from '@emotion/react';
import React from 'react';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.green.400`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
