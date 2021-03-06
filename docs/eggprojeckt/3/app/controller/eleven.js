'use strict';

const Controller = require('egg').Controller;

class ElevenController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("eleven.html");
  }

  async eleven(){
    await this.ctx.render("nine.html")
  }
}

module.exports = ElevenController;
