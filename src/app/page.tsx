'use client';
import { LuUsers, LuClock, LuCalendar, LuAccessibility } from "react-icons/lu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/bagdes";
import { EmployeesTable } from "@/components/Employes";
import { Fragment } from "react/jsx-runtime";
import { FormModal } from "@/components/FormModal";
import { useModal } from "@/hooks/modal";
import { TitlePage } from "@/components/Title";

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
    
      <EmployeesTable header={true} />
    </Fragment>
  );
}
