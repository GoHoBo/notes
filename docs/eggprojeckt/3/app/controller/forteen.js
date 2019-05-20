'use strict';

const Controller = require('egg').Controller;

class ForteenController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("forteen.html");
  }

  async add(){
    await this.ctx.render('eight.html')
}
}

module.exports = ForteenController;
