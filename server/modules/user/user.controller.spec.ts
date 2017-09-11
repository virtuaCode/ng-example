import { Test } from '@nestjs/testing';
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

Test.createTestingModule({
    controllers: [ UserController ],
    components: [ UserService ]
});

const userService = Test.get<UserService>(UserService);

it('user service should provide 3 elements', async () => {
  const users = await userService.getAllUsers();
  expect(users.length).toBe(3);
});

it('user service should not provide 2 elements', async () => {
    const users = await userService.getAllUsers();
    expect(users.length).not.toBe(2);
});