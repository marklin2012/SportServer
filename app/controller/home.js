"use strict";

const axios = require("axios").default;

const BaseController = require("./base_controller");

const Boom = require("@hapi/boom");

const instance = axios.create({
  baseURL: "http://open.sportnanoapi.com/",
});

class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    console.log(ctx.path);
    ctx.body = "Welcom home!";
  }
  async apiProxy() {
    const { ctx } = this;

    const params = {
      user: "skscore",
      secret: "032b02183a35367",
      ...ctx.query,
    };

    // ctx.body = `${ctx.query}`;
    // 测试数据
    // ctx.body = JSON.stringify(ctx.query);

    const res = await instance.get(`${ctx.path}`, { params });
    // 查看是否请求成功
    if (res.status === 200) {
      // console.log("res: ", res.data);
      ctx.body = JSON.stringify(res.data);
    } else {
      if (res.data) {
        throw Boom.badData(res.data);
      } else {
        throw Boom.badData("接口请求错误");
      }
    }
  }
}

module.exports = HomeController;
