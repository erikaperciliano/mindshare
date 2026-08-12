import { Field, InputType } from 'type-graphql'
import { Role } from '../../models/user.model'
import { string } from 'zod'

@InputType()
export class CreateUserInput {
    @Field(() => String)
    name!: string

    @Field(() => String)
    email!: string
}
@InputType()
export class UpdateUserInput {
  @Field(() => Role, { nullable: true })
  role?: Role

  @Field(() => String, { nullable: true })
  name?: string
}