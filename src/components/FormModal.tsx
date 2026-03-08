'use client';
import { CgClose } from "react-icons/cg"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useCreateUser } from "@/hooks/api/user/useUsers";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "@/types/User";
import { Select } from "./ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormData, createUserSchema } from "@/schemas/createUserSchemas";

type Props = {
    closeModal: () => void
    modalRef: React.RefObject<HTMLDivElement | null>
}

export const FormModal = ({ closeModal, modalRef }: Props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema)
    });

    const createUser = useCreateUser();

    const onSubmit = (data: CreateUserFormData) => {
        createUser.mutate(data, {
            onSuccess: () => reset(),
        });
    };
    // const onSubmit: SubmitHandler<User> = (data) => {
    //     createUser.mutate(data, {
    //         onSuccess: () => {
    //             reset(); // limpa formulário
    //             closeModal()
    //             alert("Usuário criado com sucesso!");
    //         },
    //         onError: (error: Error) => {
    //             alert(`Erro ao criar usuário: ${error.message}`);
    //         },
    //     });
    // };
    return (
        <div className="bg-black/55 fixed inset-0 flex justify-center items-center z-30" ref={modalRef}>
            <Card className="overflow-hidden border-card p-5 min-w-[350px] max-w-[550px] w-full">
                <CardHeader className="flex justify-between items-center flex-row pt-0 px-0">
                    <CardTitle className="p-0">Cadastrar Novo Funcionário</CardTitle>
                    <div className="cursor-pointer border p-2" onClick={closeModal}><CgClose /></div>
                </CardHeader>
                <CardContent className="p-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Nome */}
                        <div>
                            <label className="text-sm mb-2">Nome Completo</label>
                            <Input
                                placeholder="Ex: Ana Carolina da Silva"
                                {...register("name", { required: true })}
                            />
                             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Tipo */}
                        <div className="mt-3">
                            <label className="text-sm mb-2">Tipo</label>
                            <Input
                                placeholder="Ex: funcionario"
                                {...register("type", { required: true })}
                            />
                        </div>

                        {/* Cargo e Departamento */}
                        <div className="flex gap-5 mt-3">
                            <div className="flex-1">
                                <label className="text-sm mb-2">Cargo</label>
                                <Input
                                    placeholder="Ex: Desenvolvedora"
                                    {...register("role", { required: true })}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm mb-2">Departamento</label>
                                <Input
                                    placeholder="Ex: TI"
                                    {...register("department", { required: true })}
                                />
                            </div>
                        </div>

                        {/* Email e Telefone */}
                        <div className="flex gap-5 mt-3">
                            <div className="flex-1">
                                <label className="text-sm mb-2">Email</label>
                                <Input
                                    placeholder="Ex: ana@gmail.com"
                                    type="email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm mb-2">Telefone</label>
                                <Input
                                    placeholder="Ex: (88) 88888-8888"
                                    {...register("phone", { required: true })}
                                />
                            </div>
                        </div>

                        {/* Localização e Turno */}
                        <div className="flex gap-5 mt-3">
                            <div className="flex-1">
                                <label className="text-sm mb-2">Localização</label>
                                <Input
                                    placeholder="Ex: São Paulo"
                                    {...register("location", { required: true })}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm mb-2">Turno</label>
                                <Select {...register("shift", { required: true })}>
                                    <option value="morning">Manhã</option>
                                    <option value="afternoon">Tarde</option>
                                    <option value="night">Noite</option>
                                </Select>
                            </div>
                        </div>

                        {/* Senha e confirmação (opcional) */}
                        <div className="flex gap-5 mt-3">
                            <div className="flex-1">
                                <label className="text-sm mb-2">Senha</label>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    {...register("password")}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm mb-2">Confirmação da Senha</label>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    {...register("password_confirmation")}
                                />
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="mt-4 flex justify-end gap-3">
                            <Button
                                type="button"
                                onClick={() => reset()}
                                className="bg-[var(--bg-backgroun)] text-[var(--color-foreground)] border rounded border-card hover:bg-[var(--bg-accent)] hover:text-[var(--accent-foreground)] h-10 px-4 py-2"
                            >
                                Cancelar
                            </Button>
                            <Button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                                Cadastrar
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>

    )
}