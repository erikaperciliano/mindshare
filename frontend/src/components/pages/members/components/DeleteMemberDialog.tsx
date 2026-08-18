import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DELETE_USER } from "@/lib/graphql/mutations/members"
import { LIST_MEMBERS } from "@/lib/graphql/queries/members"
import type { User } from "@/types"
import { useMutation } from "@apollo/client/react"

interface DeleteMemberDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    member: User | null
}

export function DeleteMemberDialog({ open, onOpenChange, member }: DeleteMemberDialogProps) {
    const [deletedUserMutation, { loading }] = useMutation(DELETE_USER, {
        onCompleted: () => {
            onOpenChange(false)
        },
        refetchQueries: [LIST_MEMBERS]
    })
    
    const handleDeleteUser = async () => {
        if (!member) return
        
        await deletedUserMutation({
            variables: {
                id: member.id
            }
        })
    } 
    
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Remover Usuário</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-muted-foreground">
                    Tem certeza que deseja remover
                    <span className="font-medium"> {member?.name}</span>? Essa ação não poderá ser desfeita.
                </p>
                <DialogFooter>
                    <Button variant='outline' onClick={() => onOpenChange(false)}>Cancelar</Button>
                    <Button variant='destructive' onClick={handleDeleteUser} disabled={loading}>Remover</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}