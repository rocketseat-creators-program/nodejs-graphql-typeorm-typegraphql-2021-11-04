import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../database/entities/User";

@Resolver(User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("firstname") firstname: string,
    @Arg("lastname") lastname: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const user = Object.assign(new User(), {
      firstname,
      lastname,
      email,
      password,
    });
    await User.save(user);
    return user;
  }
}
