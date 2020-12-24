import { Controller, Get, Res, Request, Response, Body, Query, Post, UseGuards,HttpException, LoggerService, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './auth/dto/login.dto'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';



@ApiTags('token获取')
@Controller()
export class AppController {
  constructor(
		private readonly authService: AuthService,
		private readonly appService: AppService,
		@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
	) {}
	
	@Get()
	root(@Res() res) {
		res.render('index');
	}
  
  // @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginDto:LoginDto) {
	  // return this.authService.login(loginDto);
		this.logger.log('开始登录')
	  let pass = await this.authService.validateUser(loginDto.username,loginDto.password)
	  if(pass){
		  return this.authService.login(pass);
	  }
		this.logger.error('账号/密码错误')
	  throw new HttpException({
		status: 500,
		message: '账号/密码错误',
	  }, 500)
  }
	
	@Get('userInfo')
	async getInfo(@Query() token:string): Promise<any>{
		return await this.authService.getUersInfo(token)
	}
 
  @UseGuards(AuthGuard('jwt'))
  @Get('auth/profile')
  getProfile(@Request() req) {
      return req.user;
  }
	
	@Post('getLive')
	async getLive() {
		return await this.appService.getLive1();
	}
}
