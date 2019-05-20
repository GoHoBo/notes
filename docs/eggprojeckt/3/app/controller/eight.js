'use strict';

const Controller = require('egg').Controller;

class EightController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("eight.html");
  }
  async add(){
    await this.ctx.render('fourteen.html')
}

async add(){
    await this.ctx.render('five.html')
}

async nine(){
    await this.ctx.render('nine.html')
}
}

module.exports = EightController;
