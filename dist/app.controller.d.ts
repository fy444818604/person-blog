import { LoggerService } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './auth/dto/login.dto';
export declare class AppController {
    private readonly authService;
    private readonly appService;
    private readonly logger;
    constructor(authService: AuthService, appService: AppService, logger: LoggerService);
    root(res: any): void;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    getInfo(token: string): Promise<any>;
    getProfile(req: any): any;
    getLive(): Promise<any>;
}
