'use strict';

const Controller = require('egg').Controller;

class TenController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("ten.html");
  }
  
  async ten(){
    await this.ctx.render("nine.html")
  }
}

module.exports = TenController;
