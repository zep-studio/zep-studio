import emotionNormalize from 'emotion-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          @font-face {
            font-family: 'Pretendard';
            font-weight: 45 920;
            font-style: normal;
            font-display: swap;
            src: local('Pretendard'),
              url('./fonts/PretendardVariable.woff2') format('woff2-variations');
          }

          ${emotionNormalize}
        `}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
