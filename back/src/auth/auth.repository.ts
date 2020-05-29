import { EntityRepository, Repository } from 'typeorm';
import { User } from './auth.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp({ name, password }) {
        const user = new User();
        user.username = name;
        user.password = password;
        user.balance = '0';
        const r = await user.save();
        if (r) return { username: user.username, result: true };
        else return { username: '', result: false };
    }
}
