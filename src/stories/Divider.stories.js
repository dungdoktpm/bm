import { action } from '@storybook/addon-actions';
import divider01 from '../assets/images/divider1.png';
import divider02 from '../assets/images/divider2.png';
import divider03 from '../assets/images/divider.png';
export default {
  title: 'Components/Divider',
};

export const Horizontal = () => {
  return /* html */ `
  <div class="divider">
    <img src="${divider01}" alt="" class="divider--horizontal"/>
  </div>
  `;
};
export const Vertical = () => {
  return /* html */ `
  <div class="divider divider--vertical">
    <img src="${divider02}" alt=""/>
  </div>
  `;
};
export const Diagonal = () => {
  return /* html */ `
  <div class="divider">
    <img src="${divider03}" alt="" class=" divider--diagonal"/>
  </div>
  `;
};
