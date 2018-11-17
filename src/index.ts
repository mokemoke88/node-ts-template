/**
 * @file browserエントリポイント
 */

import Vue from 'vue';

const vue = new Vue({
  template: require('./index.tmpl.html'),
  el: '#vueapp',
});
