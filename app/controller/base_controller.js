const Controller = require("egg").Controller;

class BaseController extends Controller {
  success(data, message) {
    this.ctx.body = {
      statusCode: 200,
      message: message ?? "success",
      data,
    };
  }
}

module.exports = BaseController;
