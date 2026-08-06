import { prismaClient } from "../../prisma/prisma";
import { CreateCommentType } from "../dtos/input/comment.input";

export class CommentService {
    async create(ideaId: string, authorId: string, data: CreateCommentType) {
        const findIdea = await prismaClient.idea.findUnique({
            where: {
                id: ideaId
            }
        })

        if (!findIdea) throw new Error('Ideia não encontrada!')
        
        return prismaClient.comment.create({
            data: {
                ideaId,
                authorId,
                content: data.content
            }
        })
    }
}