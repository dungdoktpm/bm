import service01 from '../assets/images/service01.png';
import service03 from '../assets/images/service03.png';
export default {
  title: 'Components/Services',
};
export const ServiceItem = () => {
  return /* html */ `
  <div class="container">
    <div class="row">
      <div class="service">
        <div class="col-desk-6 col-mob-12">

          <div class="service__img">
          <div class="overlay"></div>
            <div class="aspect__img">
              <img src="https://picsum.photos/650/650"/>
            </div>
            <i class="pe-7s-arc"></i>
          </div>
        </div>
        <div class="col-desk-6 col-mob-12">
          <div class="service__content">
            <div class="service__number">01</div>
            <h3 class="service__title mb-60 mt-115">
              CONTRARY TO POPULAR BELIEF
            </h3>
            <p class="service__desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="col-desk-6 col-mob-12">
          <div class="service__img">
            <div class="overlay"></div>
            <div class="aspect__img">
              <img src="${service01}"/>
            </div>
            <i class="pe-7s-arc"></i>
          </div>
        </div>
        <div class="col-desk-6 col-mob-12">
          <div class="service__content">
            <div class="service__number">01</div>
            <h3 class="service__title mb-60 mt-115">
              CONTRARY TO POPULAR BELIEF
            </h3>
            <p class="service__desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
