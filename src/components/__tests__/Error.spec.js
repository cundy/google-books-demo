import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Error from '../Error.vue';

describe('Error', () => {
  it('renders properly', () => {
    const errorMessage = 'Error message';
    const wrapper = mount(Error, { props: { message: errorMessage} });
    expect(wrapper.text()).toContain(errorMessage);
  });
});
