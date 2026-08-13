import { useState } from "react";
import logo from '@/assets/logo.svg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/stores/auth";
import { toast } from "sonner";
import type { FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export function SignUp() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signup = useAuthStore((state) => state.signup)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            const signupMutate= await signup({
                name,
                email,
                password
            })

            if (signupMutate) {
                console.log("Signup result:", signupMutate);
                toast.success('Cadastro realizado com sucesso!')
            }
        } catch (error) {
            console.error("Erro ao realizar o cadastro:", error);
            toast.error("Erro ao realizar o cadastro");
        } finally {
            setLoading(false)
        }   
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
                        <Button type="submit" className="w-full" disabled={loading}>
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