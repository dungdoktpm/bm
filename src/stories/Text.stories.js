import { action } from '@storybook/addon-actions';
import bg_text from '../assets/images/bg-text.jpg';
export default {
  title: 'Components/Text',
};

export const TextFillColor = () => {
  return /* html */ `
    <h3 class="text text--img" style = "background-image: url('${bg_text}')">
      journal
    </h3>
  `;
};
