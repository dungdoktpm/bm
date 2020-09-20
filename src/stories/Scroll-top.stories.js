export default {
    title: 'Components/Scroll to top',
  };

  export const ScrollTop = () => {
    return /* html */ `
      <div class="scroll mt-50" id="btnTop" onclick = topClick()>
        <a href=""  title= "To top" class="scroll__text">SCROLL TO TOP</a>
        <i class="pe-7s-download"></i>
      </div>
    `;
  };
