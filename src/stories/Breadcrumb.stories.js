
export default {
  title: 'Components/Breadcrumb',
};
export const Breadcrumb = () => {
  return /* html */ `
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb__item"><a href="#">Home</a></li>
      <li class="breadcrumb__item"><a href="#">Library</a></li>
      <li class="breadcrumb__item active" aria-current="page"><a>Data</a></li>
    </ol>
  </nav>
  `;
};
