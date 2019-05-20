'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.one.index);
  router.get('/two', controller.two.index);
  router.get('/three', controller.three.index);
  router.get('/four', controller.four.index);
  router.get('/eight', controller.eight.index);
  router.get('/five', controller.five.index);
  router.get('/seven', controller.seven.index);
  router.get('/forteen', controller.forteen.index);
  router.get('/nine',controller.moban.nine)
  router.get('/ten',controller.moban.ten)
  router.get('/eleven',controller.moban.eleven)
  router.get('/twelve',controller.moban.twelve)
  router.get('/thirteen',controller.thirteen.index)
};
