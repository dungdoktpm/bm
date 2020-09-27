import { action } from '@storybook/addon-actions';
import logo02 from "../assets/images/BM02.png";
export default {
  title: 'Components/Form',
};

export const ReplyForm = () => {
  return /* html */ `
  <form action="" method="post" class="form-reply">
    <div class="form__title">
        LEAVE A REPLY
    </div>
    <div class="form__main">
      <div class="group-field">
        <label for="">Your name</label>
        <input type="text" name="" id="">
      </div>
      <div class="group-field">
        <label for="">Your email</label>
        <input type="text" name="" id="">
      </div>
      <div class="group-field">
        <label for="">Message</label>
        <textarea name="" id="" cols="30" rows="6"></textarea>
      </div>
      <div class="group-field">
        <label for=""></label>
        <button class="btn btn-submit">SUBMIT</button>
      </div>
    </div>
  </form>

  `;
};

export const ContactForm = () => {
  return /* html */ `
  <div style="font-size: 20px; font-weight:bold">
    Contact form
  </div>
  <div class="contact-info">
    <div class="step-form">
      <div class="step">
        <h4 class="step__title">
          <span>Your name</span> <span>*</span>
          <i class="fas fa-arrow-circle-right"></i>
        </h4>
        <h4 class="step__title">
          Your email<span> *</span>
        </h4>
        <h4 class="step__title">
          Message <span>*</span>
        </h4>
      </div>
      <div class="form">
        <form action="">
          <div class="form__field slide-page">
            <input type="text" placeholder="Your name">
            <a href="" class="step1"><i class="fas fa-arrow-circle-right icon-arrow"></i></a>
          </div>
          <div class="form__field">
            <input type="text" placeholder="Your email">
            <a href="" class="step2"><i class="fas fa-arrow-circle-right icon-arrow"></i></a>
          </div>
          <div class="form__field">
            <input type="text" placeholder="Message">
            <a href="" class="step3 submit"><i class="fas fa-arrow-circle-right icon-arrow"></i></a>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-mob-12 col-desk-6 left">
        <img src="https://picsum.photos/635/477" alt="">
        <a class="logo" href="#">
          <img src="${logo02}" alt="logo" />
        </a>
      </div>
      <div class="col-mob-12 col-desk-6">
        <div class="contact-info__main">
          <h3 class="contact-info__title">
            CONTACT INFO
          </h3>
          <p class="contact-info__desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias inventore eius ducimus repellat soluta possimus
          </p>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-map-marker"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                ADDRESS
              </h3>
              <p class="group-info__desc">
                121 King Street, Melbourne Victoria 3000 Australia
              </p>
            </div>
          </div>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-mail"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                EMAIL
              </h3>
              <p class="group-info__desc">
                bowman@email.com
              </p>
            </div>
          </div>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-phone"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                CALL ME
              </h3>
              <p class="group-info__desc">
                +98 76543210 or +123 4567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  `;
};
