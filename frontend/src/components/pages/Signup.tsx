import { useState } from "react";
import logo from '@/assets/logo.svg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    
    const handleSubmit = (e: React.SubmitEvent) => {

    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center flex-col gap-6">
            <img src={logo} alt="logo" className="w-64 h-22" />
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
                    <CardDescription>
                        Informe seu nome, e-mail e senha de acesso
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Digite seu nome</Label>
                            <Input
                                id="name"
                                type="name"
                                placeholder="Seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                            Cadastrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Já tem uma conta?
                    </CardTitle>
                    <CardDescription>Entre agora mesmo</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => navigate('/login')}
                    >
                        Acessar conta
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}