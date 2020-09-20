import bgImage1 from '../assets/images/bg-banner.png';
import bgImage2 from '../assets/images/bg-footer.png';
import logo02 from "../assets/images/BM02.png";
export default {
  title: 'Components/Background',
};
export const BackgroundBanner = () => {
  return /* html */ `
    <div class="banner background background--img" style="background-image: url('${bgImage1}')">
      <h3 class="background__title mb-24 uppercase">SERVICES</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb__item"><a href="#">Home</a></li>
          <li class="breadcrumb__item"><a href="#">Sevice</a></li>
          <li class="breadcrumb__item active" aria-current="page"><a>Sevice</a></li>
        </ol>
      </nav>
    </div>

  `;
};

export const BackgroundFooter = () => {
  return /* html */ `
    <div class="footer background background--img background--center" style="background-image: url('${bgImage2}')">
      <a class="logo" href="#">
        <img src="${logo02}" alt="logo"/>
      </a>
      <nav class="navbar--light">
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="" class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">About</a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">Portfolio</a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">Blog</a>
          </li>
          <li class="navbar__item">
            <a href="" class="navbar__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  `;
};
