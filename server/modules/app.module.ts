import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { IndexController } from "./index/index.controller";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";
import { AuthController } from "./auth/auth.controller";
import { AuthMiddleware } from "./user/auth.middleware";


@Module({
    controllers: [ IndexController, UserController, AuthController ],
    components: [ UserService, AuthService ]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(UserController);
    }
}