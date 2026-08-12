import { Field, ID, ObjectType, GraphQLISODateTime, registerEnumType } from "type-graphql";

export enum Role {
  owner = 'owner',
  admin = 'admin',
  member = 'member',
  viewer = 'viewer',
}


registerEnumType(Role, {
  name: 'Role',
  description: 'User role in the system',
})

@ObjectType()
export class UserModel {
    @Field(() => Role, { nullable: true })
    role?: string
    
    @Field(() => ID)
    id!: string

    @Field(() => String)
    name!: string

    @Field(() => String)
    email!: string

    @Field(() => String, { nullable: true })
    password?: string | null

    @Field(() => GraphQLISODateTime)
    createdAt!: Date

    @Field(() => GraphQLISODateTime)
    updatedAt!: Date
}