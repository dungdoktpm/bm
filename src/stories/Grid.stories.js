import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Grid',
};

const styles = {
  columnColor: `background-color: #ccc; border: 1px solid #eee; text-align: center; margin-bottom: 1rem`,
};
export const GridGrid = () => {
  return /* html */ `
      <div class="container">
      <!--100%-->
        <div class="row">
          <div class="col col-desk-12" style="${styles.columnColor}">col desk 12</div>
        </div>

        <!--50%-->
        <div class="row">
          <div class="col-desk-6 col-mob-12" style="${styles.columnColor}">col desk 6</div>
          <div class="col-desk-6 col-mob-12" style="${styles.columnColor}"> col desk 6</div>
        </div>

        <!--33.33%-->
        <div class="row">
          <div class="col-desk-4 col-tab-6 col-mob-12" style="${styles.columnColor}"> col desk 4</div>
          <div class="col-desk-4 col-tab-6 col-mob-12" style="${styles.columnColor}"> col desk 4</div>
          <div class="col-desk-4 col-tab-6 col-mob-12" style="${styles.columnColor}"> col des 4</div>
        </div>

        <!--25%-->
        <div class="row">
          <div class="col-desk-3 col-mob-12" style="${styles.columnColor}"> col desk 3</div>
          <div class="col-desk-3 col-mob-12" style="${styles.columnColor}"> col desk 3</div>
          <div class="col-desk-3 col-mob-12" style="${styles.columnColor}"> col desk 3</div>
          <div class="col-desk-3 col-mob-12" style="${styles.columnColor}"> col desk 3</div>
        </div>
      </div>
  `;
};
