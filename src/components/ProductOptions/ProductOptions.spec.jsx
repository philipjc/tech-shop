import React from 'react';
import {render} from '@testing-library/react';
import Product from '../Product';

test('renders learn react link', () => {
  const {getByText} = render(<Product {...{
    id: 1,
    images: [{src: ''}],
    title: 'title',
    vendor: 'Vendor name',
    variants: [{}],
    options: [
      {values: ['small']}
    ],
  }} />);
  const linkElement = getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
