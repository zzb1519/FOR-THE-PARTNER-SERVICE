/*
 * @Author: Zhang
 * @Date: 2021-12-31 13:01:49
 * @LastEditTime: 2022-01-04 12:52:37
 * @LastEditors: Zhang
 * @Description:
 */
import { Controller, Get, Provide } from "@midwayjs/decorator";

@Provide()
@Controller("/")
export class HomeController {
  @Get("/")
  async home() {
    return "Hello Midwayjs!";
  }
  @Get("/getList")
  async getList() {
    const random = Math.random();
    return "Hello Midwayjs!" + `${random}_aha`;
  }
}
