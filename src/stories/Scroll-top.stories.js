export default {
  title: 'Components/Scroll to top',
};

export const ScrollTop = () => {
  return /* html */ `
      <div class="scrollTop mt-50" id="btnTop" onclick = topClick()>
        <a href=""  title= "To top" class="scrollTop__text">SCROLL TO TOP</a>
        <i class="pe-7s-download"></i>
      </div>
    `;
};
