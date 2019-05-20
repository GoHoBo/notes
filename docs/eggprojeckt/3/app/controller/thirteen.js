const Controller = require('egg').Controller;

class ThirteenController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("thirteen.html")
    }
    
    async thirteen(){
        await this.ctx.render('nine.html')
    }
}

module.exports = ThirteenController;