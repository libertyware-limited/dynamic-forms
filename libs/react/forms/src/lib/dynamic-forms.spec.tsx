import React from 'react';
import { render } from '@testing-library/react';

import DynamicForms from './dynamic-forms';

describe('DynamicForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicForms />);
    expect(baseElement).toBeTruthy();
  });
});
