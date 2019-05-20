'use strict';

const Controller = require('egg').Controller;

class ThreeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("three.html");
  }
}

module.exports = ThreeController;
