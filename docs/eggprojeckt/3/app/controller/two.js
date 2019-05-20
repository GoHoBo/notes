'use strict';

const Controller = require('egg').Controller;

class TwoController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("two.html");
  }
}

module.exports = TwoController;
