'use strict';

const Controller = require('egg').Controller;

class TwelveController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("twelve.html");
  }

  async twelve(){
    await this.ctx.render("nine.html")
  }
}

module.exports = TwelveController;
