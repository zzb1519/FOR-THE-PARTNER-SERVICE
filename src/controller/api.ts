/*
 * @Author: Zhang
 * @Date: 2021-12-31 13:01:49
 * @LastEditTime: 2022-01-04 12:53:29
 * @LastEditors: Zhang
 * @Description:
 */
import {
  Inject,
  Controller,
  // Post,
  Get,
  Provide,
  Query,
} from "@midwayjs/decorator";
import { Context } from "egg";
import { IGetUserResponse } from "../interface";
import { UserService } from "../service/user";

@Provide()
@Controller("/api")
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get("/my")
  async my() {
    const random = Math.random();
    return "Hello Midwayjs!" + `MY_${random}_aha`;
  }

  @Get("/get_user")
  async getUser(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: "OK", data: user };
  }
}
