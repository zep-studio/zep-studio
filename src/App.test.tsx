import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import App from './App';

test('renders the title', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
  );
  const linkElement = screen.getByText(/ZEP studio/i);
  expect(linkElement).toBeInTheDocument();
});
