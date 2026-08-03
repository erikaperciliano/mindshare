import { Field } from "type-graphql";
import { UserModel } from "../../models/user.model";

export class RegisterOutput {
    @Field(() => String)
    token!: string

     @Field(() => String)
    refreshToken!: string

    @Field(() => UserModel)
    user!: UserModel
}