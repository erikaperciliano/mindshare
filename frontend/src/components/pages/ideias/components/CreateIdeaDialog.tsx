
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

interface CreateIdeaDDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSuccess?: () => void
}

export function CreateIdeaDialog({ open, onOpenChange, onSuccess }: CreateIdeaDDialogProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit = () => {

    }
    
    const handleCancel = () => {
        setTitle('')
        setDescription('')
        onOpenChange(false)
    }
    
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-2xl font-bold leading-tight'>
                        Compartilhe sua idea
                    </DialogTitle>
                    <DialogDescription className='text-sm text-muted-foreground'>
                        Adicione uma nova ideia para seu time
                    </DialogDescription>
                </DialogHeader>
                 <form onSubmit={handleSubmit} className='space-y-5 mt-6'>
                    <div className="space-y-1">
                        <Label htmlFor='title' className='text-sm font-normal'>
                            Título
                        </Label>
                        <Input
                            id='title'
                            placeholder='Dê um nome para sua ideia'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='w-full'
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor='description' className='text-sm font-normal'>
                            Descrição
                        </Label>
                        <Textarea
                            id='description'
                            placeholder='Escreva sua ideia'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={6}
                            className='w-full'
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <Button
                            variant='outline'
                            type='button'
                            onClick={handleCancel}
                        >
                            Cancelar
                        </Button>
                        <Button type='submit'>
                            Salvar
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
        
    )
}