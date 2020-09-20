export default {
  title: 'Components/Pagination',
};

export const Pagination = () => {
  return /* html */ `
  <nav aria-label="Page navigation example" class="navigation">
    <ul class="pagination">
      <li class="page-item"><a class="page-link previous" href="#"><i class="pe-7s-play"></i></a></li>
      <li class="page-item"><a class="page-link active" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link next" href="#"><i class="pe-7s-play"></i></a></li>
    </ul>
  </nav>
  `;
};
