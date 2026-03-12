"use client";

import { EmployeesTable } from "@/components/Employes";
import { TitlePage } from "@/components/Title";
import { Badge } from "@/components/ui/bagdes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { FaCalendar, FaUsers } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const escalasGrid = [
    {
        nome: "5x2 Comercial",
        horario: "Segunda a sexta, 08h–18h",
        funcionarios: 124,
        icon: <FaUsers />
    },
    {
        nome: "6x1 Escala",
        horario: "6 dias trabalhados, 1 folga rotativa",
        funcionarios: 56,
        icon: <FaUsers />
    },
    {
        nome: "12x36 Noturno",
        horario: "12h trabalhadas, 36h de descanso",
        funcionarios: 38,
        icon: <FaUsers />
    },
    {
        nome: "Personalizada TI",
        horario: "Flexível com banco de horas",
        funcionarios: 30,
        icon: <FaUsers />
    }
];

type BancoHorasFuncionario = {
    funcionario: string;
    cargo?: string;
    seg: string;
    ter: string;
    qua: string;
    qui: string;
    sex: string;
    sab: string;
    dom: string;
    total: string;
};

type Column = {
    key: keyof BancoHorasFuncionario | "actions";
    label: string;
    render?: (value: any, row: BancoHorasFuncionario) => React.ReactNode;
};

export default function Escalas() {
    const renderTurno = (turno: string) => {
        const estilos: Record<string, string> = {
            M: "bg-blue-100 text-blue-700",
            T: "bg-orange-100 text-orange-700",
            N: "bg-purple-100 text-purple-700",
            F: "bg-gray-200 text-gray-700",
            I: "bg-red-100 text-red-700",
        };

        return <Badge className={estilos[turno]}>{turno}</Badge>;
    };
    const rows: BancoHorasFuncionario[] = [
        {
            funcionario: "Ana Carolina Silva",
            cargo: "Desenvolvedora",
            seg: "M",
            ter: "M",
            qua: "M",
            qui: "M",
            sex: "M",
            sab: "F",
            dom: "F",
            total: "40h",
        },
    ];
    const columns: Column[] = [
        { key: "funcionario", label: "Funcionário" },
        { key: "seg", label: "Seg", render: (v) => renderTurno(v) },
        { key: "ter", label: "Ter", render: (v) => renderTurno(v) },
        { key: "qua", label: "Qua", render: (v) => renderTurno(v) },
        { key: "qui", label: "Qui", render: (v) => renderTurno(v) },
        { key: "sex", label: "Sex", render: (v) => renderTurno(v) },
        { key: "sab", label: "Sáb", render: (v) => renderTurno(v) },
        { key: "dom", label: "Dom", render: (v) => renderTurno(v) },
        { key: "total", label: "Total" },
    ];

    return (
        <>
            <div className="flex justify-between items-center">
                <TitlePage title="Escalas" description="Gerencie turnos e escalas personalizadas" />
                <div>
                    <Button >
                        <GoPlus />
                        Nova Escala
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {escalasGrid.map((stat, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden border-card stat-card-shadow transition-all hover:stat-card-shadow-hover"
                    >
                        <CardHeader className="flex justify-between  items-start gap-2">
                            <div className="rounded-lg p-2 bg-[var(--bg-accent)]">
                                <FaCalendar className="w-5 h-5 text-[var(--accent-foreground)]" />
                            </div>
                            <div>
                                <p className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--card-foreground)]">
                                    {stat.nome}
                                </p>
                            </div>
                            <CardDescription>{stat.horario}</CardDescription>
                        </CardHeader>

                        <CardContent className="!flex !gap-1 items-center">
                            <CardDescription><FaUsers /></CardDescription>
                            <CardDescription>{stat.funcionarios} funcionários</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <EmployeesTable data={rows} columns={columns} header={false} />

            <div className="flex flex-wrap gap-3 mt-4">
                <Badge className="bg-blue-100 text-blue-700">M</Badge>
                <span>→ Manhã</span>

                <Badge className="bg-orange-100 text-orange-700">T</Badge>
                <span>→ Tarde</span>

                <Badge className="bg-purple-100 text-purple-700">N</Badge>
                <span>→ Noite</span>

                <Badge className="bg-gray-200 text-gray-700">F</Badge>
                <span>→ Folga</span>

                <Badge className="bg-red-100 text-red-700">I</Badge>
                <span>→ Falta</span>
            </div>
        </>
    )
}