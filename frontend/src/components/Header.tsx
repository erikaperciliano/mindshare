import { useAuthStore } from "@/stores/auth"
import logoIcon from '@/assets/logo-icon.svg'
import { Lightbulb, LogOut, Users } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useLocation } from "react-router-dom"
import { Avatar, AvatarFallback } from "./ui/avatar"

export function Header() {
    const { user, logout, isAuthenticated } = useAuthStore()
    const location = useLocation()
    const navigate = useNavigate()
    const isIdeasPage = location.pathname === '/'
    const isMembersPage = location.pathname === '/members'

    const handleLogout = async () => {
        await logout()
        navigate('/login', { replace: true })
    }

    return (
        <div className="w-full px-16 pt-6">
            {isAuthenticated && (
                <div className="flex justify-between w-full">
                    <div className="min-w-48">
                        <img src={logoIcon} />
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to='/'>
                            <Button
                                size='sm'
                                className='gap-2'
                                variant={isIdeasPage ? 'default' : 'ghost'}
                            >
                                <Lightbulb className="h-4 w-4" />
                                Ideias
                            </Button>
                        </Link>
                        <Link to='/members'>
                            <Button
                                size='sm'
                                className='gap-2'
                                variant={isMembersPage ? 'default' : 'ghost'}
                            >
                                <Users className="h-4 w-4" />
                                Membros
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarFallback className='bg-zinc-950 text-primary-foreground'>
                                    {user?.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                    {user?.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {user?.email}
                                </span>
                            </div>
                        </div>
                        <Button variant='ghost' size='icon' onClick={handleLogout}>
                            <LogOut className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}