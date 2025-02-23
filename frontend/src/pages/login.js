import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import axios from '../configure/axiosConfig'; // Certifique-se de ajustar a configuração do axios

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post('/login', data, { withCredentials: true }); // Substitua pela URL correta
            console.log('Resposta da API:', response.data);

            // Supondo que você tenha um método login no contexto (ou no estado global) para autenticar o usuário
            // login(response.data.user);  // Como exemplo, caso você tenha esse método.

            setSuccess(true);
            setData({ email: "", password: "", remember: false }); // Limpar campos após login bem-sucedido
            // Redirecionar após o login
            // Exemplo: navigate("/dashboard");
        } catch (error) {
            setError('Credenciais inválidas ou erro no servidor');
            console.error('Erro no login:', error); // Log de erro
        } finally {
            setLoading(false);
        }

        // Caso esteja usando Inertia.js, utilize o post
        // post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            {success && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Login bem-sucedido! Redirecionando...
                </div>
            )}

            {error && (
                <div className="mb-4 font-medium text-sm text-red-600">
                    {error}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={loading || processing}>
                        {loading || processing ? 'Carregando...' : 'Log in'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
