import { Field, ID, ObjectType, GraphQLISODateTime } from "type-graphql";
import { UserModel } from "./user.model";

@ObjectType()
export class IdeaModel {

    @Field(() => ID)
    id!: string

    @Field(() => String)
    title!: string

    @Field(() => String,  { nullable: true })
    description?: string | null

    @Field(() => String)
    authorId!: string

    @Field(() => String, { nullable: true })
    author?: UserModel

    @Field(() => GraphQLISODateTime)
    createdAt!: Date

    @Field(() => GraphQLISODateTime)
    updatedAt!: Date
}