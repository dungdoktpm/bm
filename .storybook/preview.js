import '!style-loader!css-loader!sass-loader!import-glob-loader!../src/assets/scss/styles.scss';
import '../src/assets/js/scripts.js';
import '../src/assets/js/navbar.js';
// import '../src/assets/js/slider.js';
import '../src/assets/js/jquery.min.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
