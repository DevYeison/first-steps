import { CreateUserDto } from './create-user-dto';

describe('CreateUserData', () => {
  it('should be defined', () => {
    expect(new CreateUserDto()).toBeDefined();
  });
});
