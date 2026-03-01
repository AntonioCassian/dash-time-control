import { CgClose } from "react-icons/cg"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const FormModal = () => {
    return (
        <div className="bg-black/55 fixed inset-0 flex justify-center items-center">
            <Card className="overflow-hidden border-card p-5 min-w-[350px] w-full">
                <CardHeader className="flex justify-between items-center flex-row pt-0 px-0">
                    <CardTitle className="p-0">Cadastrar Novo Funcionário</CardTitle>
                    <div><CgClose /></div>
                </CardHeader>
                <CardContent className="p-0">
                    <form action="">
                        <div>
                            <label className="text-[var(--color-foreground)] mb-2 text-sm">Nome Completo</label>
                            <Input placeholder="Ex: Ana Carolina da Silva" />
                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Cargo</label>
                                <Input placeholder="Ex: Desenvolvedora" />
                            </div>
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Departamento</label>
                                <Input placeholder="Ex: TI" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Email</label>
                                <Input placeholder="Ex: ana@gmail.com" />
                            </div>
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Telefone</label>
                                <Input placeholder="Ex: (88) 88888-8888" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Localização</label>
                                <Input placeholder="Ex: ana@gmail.com" />
                            </div>
                            <div className="flex-1">
                                <label className="text-[var(--color-foreground)] mb-2 text-sm">Turno</label>
                                <Input placeholder="Ex: (88) 88888-8888" />
                            </div>
                        </div>

                        <div className="mt-2 flex gap-3 items-center justify-end">
                            <Button className="bg-[var(--bg-backgroun)] text-[var(--color-foreground)] border rounded border-card hover:bg-[var(--bg-accent)] hover:text-[var(--accent-foreground)] h-10 px-4 py-2">
                                Cancelar
                            </Button>
                            <Button>
                                Cadastrar
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}