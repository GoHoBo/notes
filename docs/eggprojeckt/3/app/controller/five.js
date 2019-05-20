'use strict';

const Controller = require('egg').Controller;

class FiveController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("five.html");
  }
}

module.exports = FiveController;
