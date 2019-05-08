
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// let token = document.head.querySelector('meta[name="csrf-token"]');
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

//let token = document.head.querySelector('meta[name="csrf-token"]');
//
//if (token) {
//    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
//} else {
//    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
//}