import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Icon',
};

export const IconPlay = () => {
  return /* html */ `
      <i class="pe-7s-play icon__play"></i>
  `;
};

export const IconRibbon = () => {
  return /* html */ `
    <i class="pe-7s-ribbon icon__ribbon"></i>
  `;
};

export const FaceBook = () => {
  return /* html */ `
    <i class=" fab fa-facebook-f icon__share icon__share--facebook active center"></i>
  `;
};
