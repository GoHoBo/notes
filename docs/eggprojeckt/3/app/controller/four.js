'use strict';

const Controller = require('egg').Controller;

class FourController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("four.html");
  }
}

module.exports = FourController;
