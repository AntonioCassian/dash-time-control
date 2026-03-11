'use client';
import { LuUsers, LuClock, LuCalendar, LuAccessibility } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/bagdes";
import { EmployeesTable } from "@/components/Employes";
import { Fragment } from "react/jsx-runtime";
import { FormModal } from "@/components/FormModal";
import { useModal } from "@/hooks/modal";
import { TitlePage } from "@/components/Title";

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
const employees : Funcionario[] = [
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


export default function Home() {
  const { modalType, openModal, closeModal, modalRef } = useModal();
  const stats = [
    {
      title: "Funcionários Ativos",
      value: 248,
      description: "+12 este mês",
      icon: LuUsers,
    },
    {
      title: "Horas Trabalhadas",
      value: "1.842h",
      description: "Semana atual",
      icon: LuClock,
    },
    {
      title: "Banco de Horas",
      value: "+326h",
      description: "Saldo positivo",
      icon: LuCalendar,
    },
    {
      title: "Pendências",
      value: 17,
      description: "Ajustes necessários",
      icon: LuAccessibility,
    },
  ];

  return (
    <Fragment>
      <TitlePage title="Dashboard" description="Visão geral do controle de ponto" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {stats.map((stat) => {
          const Icon = stat.icon; // pega o componente do ícone
          return (
            <Card key={stat.title} className="overflow-hidden border-card stat-card-shadow transition-all hover:stat-card-shadow-hover">
              <CardHeader className="flex justify-between flex-row items-center gap-2">
                <div>
                  <CardDescription>{stat.title}</CardDescription>
                  <p className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--card-foreground)]">{stat.value}</p>
                </div>
                <div className="rounded-lg p-2 bg-[var(--bg-accent)]">
                  <Icon className="w-5 h-5 text-[var(--accent-foreground)]" />
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    
     <EmployeesTable data={employees} columns={columns} header={true} />
    </Fragment>
  );
}
