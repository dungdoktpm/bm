import { action } from '@storybook/addon-actions';
import img01 from '../assets/images/4.jpg';


export default {
  title: 'Components/Box Image',
};

export const BoxImgCaption = () => {
  return /*html*/`
    <div class="box-image">
      <img src="${img01}"/>
      <p class="box-image__caption mx-auto">
        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.
      </p>
    </div>
  `;
};


