import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Title',
};

export const Title = () => {
  return /* html */ `
  <div class="title">
    <h2 class="title__heading">
      Latest Work
    </h2>
    <p class="title__desc text-desc">
      On the other hand, we denounce with righteous.
    </p>
  </div>
  `;
};
