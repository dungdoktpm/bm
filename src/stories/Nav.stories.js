import logo0101 from "../assets/images/BM.png";

export default {
  title: 'Components/Nav',
};

export const Nav = () => {
  return /* html */ `
    <nav class="navbar">
      <a class="logo" href="#">
        <img src="${logo0101}" alt="logo"/>
      </a>

      <button class="navbar__toggler btn--open ">
        <i class="fas fa-bars"></i>
      </button>

      <!--menu-->
      <div class="navbar__collapse">
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="#" class="navbar__link">Home</a>
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
        <div class="search">
          <div class="search__main">
            <input type="text" class="search__text" placeholder="Search...">
            <a href="" class="search__btn btn"><i class="pe-7s-search"></i></a>
          </div>
        </div>
      </div>
    </nav>

  `;
};


