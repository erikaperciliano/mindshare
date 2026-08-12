import { AuthService } from './../services/auth.service';
import { Arg, Mutation, Resolver } from 'type-graphql'
import { RegisterInput } from '../dtos/input/auth.input';
import { LoginOutput, RegisterOutput } from '../dtos/output/auth.output';
import { LoginInput } from '../dtos/input/auth.input';


@Resolver()
export class AuthResolver {
    private AuthService = new AuthService()

    @Mutation(() => RegisterOutput)
    async register(
        @Arg('data', () => RegisterInput) data: RegisterInput
    ): Promise<RegisterOutput> {
        return this.AuthService.register(data)
    }

    @Mutation(() => LoginOutput)
    async login(
        @Arg('data', () => LoginInput) data: LoginInput
    ): Promise<LoginOutput>{
        return this.AuthService.login(data)
    }

}