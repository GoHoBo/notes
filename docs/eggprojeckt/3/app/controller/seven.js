'use strict';

const Controller = require('egg').Controller;

class SevenController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("seven.html");
  }
  async add1(){
    const { ctx } = this;
    await ctx.render("five.html");
  }
  async jump(){
    const { ctx } = this;
    await ctx.render("nine.html");
  }
}

module.exports = SevenController;
