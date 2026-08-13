import { useState } from "react";
import logo from '@/assets/logo.svg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = () => {

    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center gap-6">
            <img src={logo} alt="" className="w-64 h-22" />
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Acesse a plataforma</CardTitle>
                    <CardDescription>
                        Entre usando seu e-mail e senha cadastrados
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="*********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Ainda não tem uma conta?
                    </CardTitle>
                    <CardDescription>Cadastre-se agora mesmo</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => navigate('/signup')}
                    >
                        Criar conta
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}