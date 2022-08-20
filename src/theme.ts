import { extendTheme } from '@chakra-ui/react';

export const systemFontStack =
  '"Pretendard", "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';

export const theme = extendTheme({
  fonts: {
    heading: systemFontStack,
    body: systemFontStack,
  },
  colors: {
    nav: {
      dark: '#35343C',
    },
    main: {
      100: '#6559F6',
      200: '#4B3FE0',
      300: '#8077F2',
      400: '#A39CFB',
    },
    gray: {
      100: '#FFFFFF',
      200: '#F3F5F9',
      300: '#E3E7EC',
      400: '#ADB5BD',
      500: '#495057',
      600: '#262A2E',
    },
    sub: {
      100: '#C7E7FF',
      200: '#95CBFA',
    },
    point: {
      100: '#9AFBD8',
    },
  },
});
