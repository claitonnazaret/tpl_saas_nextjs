import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LoginForm } from './_component/form'

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Login</CardTitle>
        <CardDescription>
          Insira suas credenciais abaixo para logar na sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
