import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should test result of service getHelloUser', () => {
    const returnUsers = service.create({
      name: 'teste',
      email: 'email@example.com',
      password: '123456',
    });

    expect(returnUsers).toMatchObject({
      name: 'teste',
      email: 'email@example.com',
      password: '123456',
    });
  });
});
