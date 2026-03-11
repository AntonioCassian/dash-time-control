import { EmployeesTable } from "@/components/Employes";
import { TitlePage } from "@/components/Title";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { IconBase } from "react-icons";
const resumoBancoHoras = [
    {
        titulo: "Saldo Total",
        valor: "+52h05",
        descricao: "Acumulado da equipe"
    },
    {
        titulo: "Média por Funcionário",
        valor: "+5h12",
        descricao: "Saldo médio individual"
    },
    {
        titulo: "Com Saldo Negativo",
        valor: 3,
        descricao: "Funcionários em débito"
    },
    {
        titulo: "Compensações Pendentes",
        valor: 8,
        descricao: "Aguardando aprovação"
    }
];

type BancoHorasFuncionario = {
    codigo: string;
    funcionario: string;
    departamento: string;
    saldo: string;
    status: string;
    trabalhado: string;
    previsto: string;
    ultimaAtualizacao: string;
};

const bancoHorasFuncionarios = [
    {
        codigo: "AC",
        funcionario: "Ana Carolina Silva",
        departamento: "TI",
        saldo: "+14h32",
        status: "Positivo",
        trabalhado: "168h32",
        previsto: "154h00",
        ultimaAtualizacao: "Hoje, 17:45"
    },
    {
        codigo: "BO",
        funcionario: "Bruno Oliveira Santos",
        departamento: "Financeiro",
        saldo: "+8h15",
        status: "Positivo",
        trabalhado: "162h15",
        previsto: "154h00",
        ultimaAtualizacao: "Hoje, 18:02"
    },
    {
        codigo: "CR",
        funcionario: "Camila Rodrigues",
        departamento: "Design",
        saldo: "-3h20",
        status: "Negativo",
        trabalhado: "150h40",
        previsto: "154h00",
        ultimaAtualizacao: "Hoje, 16:30"
    },
    {
        codigo: "DC",
        funcionario: "Daniel Costa Pereira",
        departamento: "PMO",
        saldo: "+22h10",
        status: "Positivo",
        trabalhado: "176h10",
        previsto: "154h00",
        ultimaAtualizacao: "Hoje, 18:15"
    },
    {
        codigo: "EF",
        funcionario: "Elena Fernandes",
        departamento: "RH",
        saldo: "0h00",
        status: "Neutro",
        trabalhado: "—",
        previsto: "154h00",
        ultimaAtualizacao: "Em férias"
    }
];

type Column = {
    key: keyof BancoHorasFuncionario | "actions";
    label: string;
    render?: (value: any, row: BancoHorasFuncionario) => React.ReactNode;
};
const columns: Column[] = [
    { key: "funcionario", label: "Funcionário" },
    { key: "departamento", label: "Departamento" },
    { key: "saldo", label: "Saldo" },
    { key: "status", label: "Status" },
    { key: "trabalhado", label: "Trabalhado" },
    { key: "previsto", label: "Previsto" },
    { key: "ultimaAtualizacao", label: "Última Atualização" },
];

export default function BancoHoras() {

    return (
        <>
            <TitlePage title="Banco de Horas" description="Controle de saldo e compensações" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {resumoBancoHoras.map((stat, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden border-card stat-card-shadow transition-all hover:stat-card-shadow-hover"
                    >
                        <CardHeader className="flex justify-between flex-row items-center gap-2">
                            <div>
                                <CardDescription>{stat.titulo}</CardDescription>
                                <p className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--card-foreground)]">
                                    {stat.valor}
                                </p>
                            </div>

                            <div className="rounded-lg p-2 bg-[var(--bg-accent)]">
                                <IconBase className="w-5 h-5 text-[var(--accent-foreground)]" />
                            </div>
                        </CardHeader>

                        <CardContent className="pt-2">
                            <CardDescription>{stat.descricao}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <EmployeesTable data={bancoHorasFuncionarios} columns={columns} header={false} />
        </>
    )
}