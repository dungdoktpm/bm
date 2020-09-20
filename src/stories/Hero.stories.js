import { action } from '@storybook/addon-actions';
import img01 from '../assets/images/img01.png';


export default {
  title: 'Components/Hero',
};

export const Hero = () => {
  return /*html*/`
    <div class="hero">
      <div class="hero__img">
        <img src="${img01}"/>
      </div>
      <div class="hero__content mt-50">
        <div class="hero__content--left">
          <h3 class="hero__title">
            DENOUNCING PLEASURE
          </h3>
          <p class="hero__desc text-desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
        <div class="hero__content--right">
            <p><span class="bold">COMPLETED : </span> 2016</p>
            <p><span class="bold">DESIGNED : </span> Bowman</p>
            <p><span class="bold">CATEGORIES : </span> Drink & Food</p>
            <p><span class="bold">TAGS : </span> Drink & Food, Shop, Wordpress</p>
        </div>
      </div>
    </div>
  `;
};
