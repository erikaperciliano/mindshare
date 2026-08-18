import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { GET_IDEA } from "@/lib/graphql/queries/ideia"
import type { Idea } from "@/types"
import { useLazyQuery } from "@apollo/client/react"
import { X } from "lucide-react"
import { useEffect } from "react"
import { CommentsList } from "./CommentList"
import { CommentArea } from "./CommentTextArea"

interface IdeaDetailDrawerProps {
    ideaId: string | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function IdeaDetailDrawer({ open, onOpenChange, ideaId }: IdeaDetailDrawerProps) {
    const [getIdeaaQuery, { data, loading }] = useLazyQuery <{ getIdea: Idea }>(GET_IDEA)


    useEffect(() => {
        if(!idea) return

        getIdeaaQuery({
            variables: {
                ideaId
            }
        })
    }, [ideaId])
    
    const idea = data?.getIdea
    
    return (
        <Drawer open={open} onOpenChange={onOpenChange} swipeDirection="right">
            <DrawerContent className='flex flex-col rounded-l-2xl'>
                <div className="shrink-0 p-6 bg-slate-100 rounded-l-2xl">
                    <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-bold pr-4 flex-1">
                            {idea?.title || 'Carregando...'}
                        </h2>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => onOpenChange(false)}
                            className='shrink-0'
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                    {idea && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {idea?.description || ""}
                        </p>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <CommentsList comments={idea?.comments || []} loading={loading} />
                </div>
                <CommentArea
                    commentContent={""}
                    setCommentContent={console.log}
                    handleAddComment={console.log}
                    handleVote={console.log}
                    idea={idea}
                />
            </DrawerContent>
        </Drawer>
    )
}