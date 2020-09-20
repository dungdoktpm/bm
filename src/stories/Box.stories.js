import { action } from '@storybook/addon-actions';
import img01 from '../assets/images/subcribe.jpg';
import avata from '../assets/images/avata.png';
import avata02 from '../assets/images/avata05.png';
import divider from '../assets/images/divider.png';
import signature from '../assets/images/Bowm.png';


export default {
  title: 'Components/Box',
};

/*export const BoxSubcribe = () => {
  return  `
    <div class="box">
        <div class="box__img pr-5">
            <img src="${img01}" alt="">
        </div>
          <div class="box__main box__info pr-50 algin-self-center">
            <h3 class="box__title">
              I’m <span>Ralph Bowman. <span>
            </h3>
            <p class="box__desc mb-55">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi”
            </p>
            <form class="form form--subcribe">
              <div class="form__item">
                <input type="text" placeholder ="Email"/>
                <button class="btn btn--subcribe">Subcribe</button>
              </div>
            </form>
          </div>
    </div>
  `;
};

export const BoxIntro01 = () => {
  return  `
    <div class="box box--intro box--small">
        <div class="box__img">
          <img src="${avata}" alt="">
        </div>
          <div class=" box__main box__info">
            <h3 class="box__title">
              HI, MY NAME IS <span>RALPH BOWMAN. <span>
            </h3>
            <p class="box__desc mb0">
              I AM AN VIETNAMESE PRODUCT DESIGNER & PHOTOGRAPHY
            </p>
          </div>
    </div>
  `;
};

export const BoxIntro02 = () => {
  return`
    <div class="box box--intro box--large">
        <div class="box__img">
          <img src="${avata02}" alt="">
        </div>
        <div class="box__main">
          <div class="box__info">
            <h3 class="box__title">
              HI, MY NAME IS <span>RALPH BOWMAN. <span>
            </h3>
            <p class="box__desc">
              I AM AN VIETNAMESE PRODUCT DESIGNER & PHOTOGRAPHY
            </p>
          </div>
          <div class="divider">
            <img src="${divider}" alt="" class=" divider--diagonal"/>
          </div>
          <div class="box__text mb-20">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <img  src="${signature}" class="box__signature mt-30"/><br/>
            <p class="box__name-user">RALPH BOWMAN</p>
          </div>
        </div>
    </div>
  `;
};*/

export const BoxIcon = () => {
  return /*html*/`
    <div class="content content--icon">
      <p class="content__desc text-color-secondary">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
      </p>
      <span>RALPH BOWMAN</span>
    </div>
  `;
};

export const BoxImg01 = () => {
  return /*html*/`
    <img src="${img01}" alt="">
  `;
};

export const BoxImg02 = () => {
  return /*html*/`
    <img src="${avata02}" alt="" class="box__img box__img--small">
  `;
};

export const BoxSubcribe1 = () => {
  return /*html*/`
    <div class="content content--subcribe">
      <h3 class="content__title">
        I’m <span>Ralph Bowman. <span>
      </h3>
      <p class="content__desc mb-55">
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique sunt
      in culpa qui officia deserunt mollitia animi”
      </p>
      <form class="form form--subcribe">
        <div class="form__item">
          <input type="text" placeholder ="Email"/>
          <button class="btn btn--subcribe">Subcribe</button>
        </div>
      </form>
    </div>
  `;
};

export const BoxIntro011 = () => {
  return /*html*/`
    <div class="content content--intro content--small">
      <h3 class="content__title">
        HI, MY NAME IS <span>RALPH BOWMAN. <span>
      </h3>
      <p class="content__desc mb0">
        I AM AN VIETNAMESE PRODUCT DESIGNER & PHOTOGRAPHY
      </p>
    </div>
  `;
};


