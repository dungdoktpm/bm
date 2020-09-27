import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Select Box',
};

export const SelectBox = () => {
  return /* html */ `
  <div class="select__box">

    <select>
      <option value="0">Grid Creative</option>
      <option value="1">Grid Creative 2</option>
      <option value="2">Grid Creative 3</option>
      <option value="3">Grid Creative 4</option>
    </select>

  </div>
  `;
};
