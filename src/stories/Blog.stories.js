import { action } from '@storybook/addon-actions';
import blog01 from '../assets/images/blog1.png';
import blog02 from '../assets/images/blog2.png';
import blog03 from '../assets/images/blog3.png';
import blog04 from '../assets/images/blog4.png';
// import blog05 from '../assets/images/10.jpg';
import blog05 from '../assets/images/blog5.png';
// import blog06 from '../assets/images/11.jpg';
import blog06 from '../assets/images/blog6.png';
export default {
  title: 'Components/Blog',
};

export const BlogTime = () => {
  return /* html */ `
  <div class="blog__time">
    <h3 class="blog__time--day">01</h3>
    <h4 class="blog__time--month">NOV</h4>
  </div>
  `;
};
export const BlogItem = () => {
  return /* html */ `
    <div class="blog">
      <!--date-->
      <div class="blog__time">
        <h3 class="blog__time--day">01</h3>
        <h4 class="blog__time--month">NOV</h4>
      </div>
      <!--blog-item-content-->
      <div class="blog__main">
        <div class="blog__img ">
          <div class="overlay"></div>
          <div class="aspect__img">
            <img src="${blog01}">
          </div>
          <div class="blog__title uppercase">
              <h4 class="blog__title--top">lifestyel</h4>
              <h3 class="blog__title--bottom">this mistaken idea</h3>
          </div>
          <span class="blog__icon">
            <i class="pe-7s-play icon__play"></i>
          </span>
        </div>
      </div>
    </div>
  `;
};

export const BlogDetail = () => {
  return /* html */ `
  <div class="container">
    <div class="row">
      <div class="col-desk-12 col-mob-12">
        <div class="blog blog--detail">
          <!--date-->
          <div class="blog__time">
            <h3 class="blog__time--day">01</h3>
            <h4 class="blog__time--month">NOV</h4>
          </div>
          <!--blog-item-content-->
          <div class="blog__main">
            <div class="blog__img bg-overlay">
              <div class="aspect__img">
                <img src="${blog01}">
              </div>
              <div class="blog__title uppercase">
                  <h4 class="blog__title--top">lifestyel</h4>
                  <h3 class="blog__title--bottom">this mistaken idea</h3>
              </div>
              <span class="blog__icon">
                <i class="pe-7s-play icon__play"></i>
              </span>
            </div>
            <div class="blog__desc">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

export const BlogSingle = () => {
  return /* html */ `
  <div class="container">
    <div class="row blog--single">
      <!--01-->
      <div class="col-desk-12 col-mob-12">
        <div class="background background--img background--large"
        style="background-image: url('${blog01}')">

        </div>
      </div>
      <div class="blog__main mx-auto mt-40">
        <!--02-->
        <div class="col-desk-12 col-mob-12 mb-40">
          <div class="row">
            <div class="col-desk-2 col-mob-3">
              <div class="blog__time">
                <h3 class="blog__time--day">01</h3>
                <h4 class="blog__time--month">NOV</h4>
              </div>
            </div>
            <div class="col-desk-10 col-mob-9">
              <div class="blog__title--single uppercase">
                <h4 class="blog__title--top">lifestyel</h4>
                <h3 class="blog__title--bottom text-dark">this mistaken idea</h3>
              </div>
            </div>
          </div>
        </div>
        <!--03-->
        <div class="col-desk-12 col-mob-12">
          <p class="blog__desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
          <p class="blog__desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
        <!--04-->
        <div class="col-desk-12 col-mob-12 mb-50">
          <div class="row">
            <div class="col-desk-1 col-mob-3">
              <i class="pe-7s-ribbon icon__ribbon"></i>
            </div>
            <div class="col-desk-11 col-mob-9 pl-20">
              <p class="blog__desc text-color-secondary">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
              </p>
              <b>RALPH BOWMAN</b>
            </div>
          </div>
        </div>
        <!--05-->
        <div class="col-desk-12 col-mob-12">
          <p class="blog__desc mb-24">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
          <div class="blog__tag">
            <b>Tag: </b>
            <a href="">Wordpress,</a>
            <a href="">Photoshop,</a>
            <a href="">Html,</a>
            <a href="">Travel</a>
          </div>
          <div class="blog__share">
            <b>Share: </b>
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-pinterest"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
