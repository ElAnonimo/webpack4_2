import Vue from 'vue';

export default Vue.component('Profile', {
  data: () => ({
    name: 'Mikki'
  }),
  template: `
    <div class="profile">
      <img src="./images/400.jpg" alt="">
      <h1>Hello {{ name }} from Webpack 4</h1>
    </div>
  `
});
