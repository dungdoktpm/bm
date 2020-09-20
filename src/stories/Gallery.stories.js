import { action } from '@storybook/addon-actions';
import img01 from '../assets/images/img01.png';
import img02 from '../assets/images/img02.png';
import divider03 from '../assets/images/divider.png';

export default {
  title: 'Components/Gallery',
};

export const Gallery = () => {
  return /* html */ `
    <div class="gallery gallery--small">
      <a href="">
        <div class="overlay"></div>
        <div class="gallery__img">
          <img src="${img02}"/>
        </div>
        <div class="gallery__content">
          <div class="gallery__text">
            <h3 class="gallery__text--top uppercase text-white">
              DENOUNCING PLEASURE
            </h3>
            <p class="gallery__text--bottom text-white">
              Drink & Food
            </p>
          </div>
          <div class="divider">
            <img src="${divider03}" alt="" class=" divider--diagonal"/>
          </div>
          <span class="gallery__icon">
            <i class="pe-7s-play"></i>
          </span>
        </div>
      </a>
    </div>
  `;
};
