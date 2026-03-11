'use client'

import { EmployeesTable } from "@/components/Employes"
import { FormModal } from "@/components/FormModal"
import { TitlePage } from "@/components/Title"
import { Badge } from "@/components/ui/bagdes"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/modal"
import { GoPlus } from "react-icons/go"

const employees = [
    {
        id: 1,
        initials: "AC",
        name: "Ana Carolina Silva",
        role: "Desenvolvedora",
        department: "TI",
        status: "Online",
        hoursToday: "7h32",
        location: "Escritório SP",
    },
    {
        id: 2,
        initials: "BR",
        name: "Bruno Rodrigues",
        role: "Analista de Sistemas",
        department: "TI",
        status: "Online",
        hoursToday: "8h10",
        location: "Home Office",
    },
    {
        id: 3,
        initials: "CM",
        name: "Carla Mendes",
        role: "Coordenadora RH",
        department: "Recursos Humanos",
        status: "Offline",
        hoursToday: "6h45",
        location: "Escritório RJ",
    },
    {
        id: 4,
        initials: "DS",
        name: "Diego Souza",
        role: "Técnico de Suporte",
        department: "TI",
        status: "Online",
        hoursToday: "7h58",
        location: "Escritório SP",
    },
    {
        id: 5,
        initials: "EL",
        name: "Eduardo Lima",
        role: "Gerente Comercial",
        department: "Comercial",
        status: "Reunião",
        hoursToday: "5h20",
        location: "Escritório BH",
    },
    {
        id: 6,
        initials: "FM",
        name: "Fernanda Martins",
        role: "Analista Financeiro",
        department: "Financeiro",
        status: "Online",
        hoursToday: "8h00",
        location: "Home Office",
    },
    {
        id: 7,
        initials: "GL",
        name: "Gustavo Lopes",
        role: "Designer UX",
        department: "Produto",
        status: "Online",
        hoursToday: "7h12",
        location: "Escritório SP",
    },
    {
        id: 8,
        initials: "HS",
        name: "Helena Santos",
        role: "Assistente Administrativo",
        department: "Administrativo",
        status: "Offline",
        hoursToday: "4h30",
        location: "Escritório Curitiba",
    },
    {
        id: 9,
        initials: "IR",
        name: "Igor Ribeiro",
        role: "Desenvolvedor Backend",
        department: "TI",
        status: "Online",
        hoursToday: "8h22",
        location: "Home Office",
    },
    {
        id: 10,
        initials: "JS",
        name: "Juliana Souza",
        role: "Especialista Marketing",
        department: "Marketing",
        status: "Reunião",
        hoursToday: "6h10",
        location: "Escritório SP",
    },
];
type Funcionario = {
  id: number;
  initials: string;
  name: string;
  role?: string;
  department: string;
  status: string;
  hoursToday: string;
  location: string;
}; 

type Column = {
    key: keyof Funcionario | "actions";
    label: string;
    render?: (value: any, row: Funcionario) => React.ReactNode; // ReactNode aqui
};

const columns: Column[] = [
    {
        key: "name",
        label: "Funcionário",
        render: (_, row) => (
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold">
                    {row.initials}
                </div>
                <div>
                    <p className="font-medium">{row.name}</p>
                    <p className="text-muted-foreground text-xs">{row.role}</p>
                </div>
            </div>
        )
    },
    { key: "department", label: "Departamento" },
    {
        key: "status",
        label: "Status",
        render: (value) => <Badge variant="default">{value}</Badge>
    },
    {
        key: "hoursToday",
        label: "Horas Hoje",
        render: (value) => <p className="font-medium text-center">{value}</p>
    },
    { key: "location", label: "Localização" },
    {
        key: "actions",
        label: "Ações",
        render: (_, row) => (
            <div className="text-right space-x-2">
                <button className="text-primary hover:underline">Ver</button>
                <button className="text-destructive hover:underline">Editar</button>
            </div>
        )
    }
];


export default function Funcionarios() {
    const modal = useModal();
    return (
        <>
            <div className="flex justify-between items-center">
                <TitlePage title="Funcionários" description="Gerencie o cadastro de funcionários da empresa" />
                <div>
                    <Button onClick={() => { modal.openModal('funcionario') }}>
                        <GoPlus />
                        Adicionar Funcionário
                    </Button>
                </div>
            </div>

            <EmployeesTable data={employees} columns={columns} header={false} />

            {modal.modalType === "funcionario" && (
                <FormModal
                    modalRef={modal.modalRef}
                    closeModal={modal.closeModal}
                />
            )}
        </>
    )
}