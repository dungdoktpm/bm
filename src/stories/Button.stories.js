import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
};

export const BntSubmit = () => {
  return /* html */ `
    <button class="btn btn-submit">SUBMIT</button>
  `;
};

export const BntSearch = () => {
  return /* html */ `
  <div class="search">
    <div class="search__main">
      <input type="text" class="search__text" placeholder="Search...">
      <a href="" class="search__btn btn"><i class="pe-7s-search"></i></a>
    </div>
</div>
  `;
};
