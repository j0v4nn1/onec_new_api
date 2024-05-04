import User, { User as TUser } from '../models/users';
import bcrypt from 'bcrypt';
import TokenService from './token-service';

class UserService {
  async registration(userFields: TUser, payload: { name: string; email: string; passport: string }) {
    const { password, ...rest } = userFields;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUSer = await User.create({ ...rest, password: hashedPassword });
    const tokens = TokenService.generateTokens({ id: newUSer._id.toString(), ...payload });
    await TokenService.saveToken(newUSer._id, tokens.refreshToken);
    const { _id, name, email, role, passport } = newUSer;
    return {
      ...tokens,
      _id,
      name,
      email,
      role,
      passport,
    };
  }
}

export default new UserService();
