import logo01 from "../assets/images/BM.png";
import logo02 from "../assets/images/BM02.png";
export default {
  title: 'Components/Logo',
};

export const LogoTop = () => {
  return /* html */ `
  <a class="logo" href="#">
    <img src="${logo01}" alt="logo"/>
  </a>
  `;
};

export const LogoBottom = () => {
  return /* html */ `
  <a class="logo" href="#">
    <img src="${logo02}" alt="logo"/>
  </a>
  `;
};
