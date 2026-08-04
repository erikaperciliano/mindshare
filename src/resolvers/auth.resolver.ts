import { AuthService } from './../services/auth.service';
import { Arg, Mutation, Resolver } from 'type-graphql'
import { RegisterInput } from '../dtos/input/auth.input';
import { RegisterOutput } from '../dtos/output/auth.output';

@Resolver()
export class AuthResolver {
    private AuthService = new AuthService()

    @Mutation(() => RegisterOutput)
    async register(
        @Arg('data', () => RegisterInput) data: RegisterInput
    ): Promise<RegisterOutput> {
        return this.AuthService.register(data)
    }
}